import { Component, OnInit } from '@angular/core';
import { ToodeService } from 'src/app/teenused/toode.service';
import { ActivatedRoute } from '@angular/router';
import { Toode } from 'src/app/yldine/toode';
import { OstukorvService } from 'src/app/teenused/ostukorv.service';
import { OstukorvArtikkel } from 'src/app/yldine/ostukorv-artikkel';

@Component({
  selector: 'app-toode-detail',
  templateUrl: './toode-detail.component.html',
  styleUrls: ['./toode-detail.component.css']
})
export class ToodeDetailComponent implements OnInit {

  toode: Toode = new Toode();

  constructor(private toodeTeenus: ToodeService,
              private ostukorvTeenus: OstukorvService,
              private marsruut: ActivatedRoute) { }

  ngOnInit(): void {
    this.marsruut.paramMap.subscribe(() => {
      this.kasitleToodeDetailid();
    })
  }

  kasitleToodeDetailid() {
    const toodeId: number = +this.marsruut.snapshot.paramMap.get('id');

    this.toodeTeenus.getToode(toodeId).subscribe(
      andmed => {
        this.toode = andmed;
      }
    )
  }

  lisaOstukorvi() {
    console.log(`Lisan ostukorvi: ${this.toode.nimi}, ${this.toode.artikliHind}`);
    const ostukorvArtikkel = new OstukorvArtikkel(this.toode);
    this.ostukorvTeenus.lisaOstukorvi(ostukorvArtikkel);
  }

}
