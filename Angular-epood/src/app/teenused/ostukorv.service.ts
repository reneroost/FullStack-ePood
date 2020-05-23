import { Injectable } from '@angular/core';
import { OstukorvArtikkel } from '../yldine/ostukorv-artikkel';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OstukorvService {
  eemaldaArtikkel(artikkel: OstukorvArtikkel) {
    throw new Error("Method not implemented.");
  }

  ostukorvArtiklid: OstukorvArtikkel[] = [];

  ostukorvSumma: Subject<number> = new Subject<number>();
  yldKogus: Subject<number> = new Subject<number>();

  constructor() { }

  lisaOstukorvi(ostukorvArtikkel: OstukorvArtikkel) {

    // kontrollime, kas artikkel on juba ostukorvis
    let onJubaOstukorvis: boolean = false;
    let eksisteerivOstukorviArtikkel: OstukorvArtikkel = undefined;

    if (this.ostukorvArtiklid.length > 0) {
      // leiame artikli ostukorvis id põhjal
      eksisteerivOstukorviArtikkel = this.ostukorvArtiklid.find(ajutineArtikkel => ajutineArtikkel.id === ostukorvArtikkel.id)

      // kontrollime, kas oleme artikli leidnud
      onJubaOstukorvis = (eksisteerivOstukorviArtikkel != undefined);
    }

    if (onJubaOstukorvis) {
      eksisteerivOstukorviArtikkel.kogus++;
    } else {
      this.ostukorvArtiklid.push(ostukorvArtikkel);
    }
    this.arvutaOstukorviSummaJaHulk();
  }

  arvutaOstukorviSummaJaHulk() {
    let ostukorviSumma: number = 0;
    let ostukorvisKaubaHulk: number = 0;

    for (let praeguneOstukorviArtikkel of this.ostukorvArtiklid) {
      ostukorviSumma += praeguneOstukorviArtikkel.artikliHind * praeguneOstukorviArtikkel.kogus;
      ostukorvisKaubaHulk += praeguneOstukorviArtikkel.kogus;
    }

    this.ostukorvSumma.next(ostukorviSumma);
    this.yldKogus.next(ostukorvisKaubaHulk);

    this.logiOstukorviAndmed(ostukorviSumma, ostukorvisKaubaHulk);
  }

  logiOstukorviAndmed(ostukorviSumma: number, ostukorvisKaubaHulk: number) {
    console.log("Ostukorvi sisu");
    for (let ajutineArtikkel of this.ostukorvArtiklid) {
      const vaheSumma = ajutineArtikkel.artikliHind * ajutineArtikkel.kogus;
      console.log(`nimi=${ajutineArtikkel.nimi}, kogus=${ajutineArtikkel.kogus}, hind=${ajutineArtikkel.artikliHind}, vaheSumma=${vaheSumma}`);
    }
    console.log(`ostukorviSumma=${ostukorviSumma.toFixed(2)}, ostukorvisKaubaHulk=${ostukorvisKaubaHulk}`);
    console.log(`---------------`)
  }

  vahendaKogust(artikkel: OstukorvArtikkel) {
    artikkel.kogus--;

    if (artikkel.kogus === 0) {
      this.eemalda(artikkel);
    } else {
      this.arvutaOstukorviSummaJaHulk();
    }
  }

  eemalda(artikkel: OstukorvArtikkel) {
    const artikliIndeks = this.ostukorvArtiklid.findIndex(ajutineArtikkel => ajutineArtikkel.id === artikkel.id);
  
    if (artikliIndeks > -1) {
      this.ostukorvArtiklid.splice(artikliIndeks, 1);

      this.arvutaOstukorviSummaJaHulk();
    }
  }
}
