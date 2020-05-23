import { Component, OnInit } from '@angular/core';
import { OstukorvArtikkel } from 'src/app/yldine/ostukorv-artikkel';
import { OstukorvService } from 'src/app/teenused/ostukorv.service';

@Component({
  selector: 'app-ostukorv-detailid',
  templateUrl: './ostukorv-detailid.component.html',
  styleUrls: ['./ostukorv-detailid.component.css']
})
export class OstukorvDetailidComponent implements OnInit {

  ostukorvArtiklid: OstukorvArtikkel[] = [];
  summa: number = 0;
  yldKogus: number = 0;

  constructor(private ostukorvTeenus: OstukorvService) { }

  ngOnInit(): void {
    this.nimekirjastaOstukorvDetailid();
  }

  nimekirjastaOstukorvDetailid() {
    this.ostukorvArtiklid = this.ostukorvTeenus.ostukorvArtiklid;

    this.ostukorvTeenus.ostukorvSumma.subscribe(
      andmed => this.summa = andmed
    );
    
    this.ostukorvTeenus.yldKogus.subscribe(
      andmed => this.yldKogus = andmed
    );

    this.ostukorvTeenus.arvutaOstukorviSummaJaHulk
  }

  suurendaKogust(artikkel: OstukorvArtikkel) {
    this.ostukorvTeenus.lisaOstukorvi(artikkel);
  }

  vahendaKogust(artikkel: OstukorvArtikkel) {
    this.ostukorvTeenus.vahendaKogust(artikkel);
  }

  eemaldaArtikkel(artikkel: OstukorvArtikkel) {
    this.ostukorvTeenus.eemalda(artikkel);
  }

}
