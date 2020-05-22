import { Component, OnInit } from '@angular/core';
import { ToodeService } from 'src/app/teenused/toode.service';
import { Toode } from 'src/app/yldine/toode';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toode-nimekiri',
  templateUrl: './toode-nimekiri-vork.component.html',
  styleUrls: ['./toode-nimekiri.component.css']
})
export class ToodeNimekiriComponent implements OnInit {

  tooted: Toode[];
  praeguneKategooriaId: number = 1;
  eelmineKategooriaId: number = 1;
  otsinguSeisund: boolean = false;

  leheNumber: number = 1;
  leheSuurus: number = 10;
  artikleidKokku: number = 100;

  eelmineVotmesona: string = null;


  constructor(private toodeTeenus: ToodeService,
              private marsruut: ActivatedRoute) { }

  ngOnInit(): void {
    this.marsruut.paramMap.subscribe(() => {
      this.nimekirjastaTooted()
    });
  }

  nimekirjastaTooted() {

    this.otsinguSeisund = this.marsruut.snapshot.paramMap.has('votmesona');

    if (this.otsinguSeisund) {
      this.kasitleToodeOtsing();      
    } else {
      this.kasitleToodeNimekiri();
    }
  }

  kasitleToodeOtsing() {
    const votmesona: string = this.marsruut.snapshot.paramMap.get('votmesona');

    if (this.eelmineVotmesona != votmesona) {
      this.leheNumber = 1;
    }

    this.eelmineVotmesona = votmesona;

    console.log(`votmesona=${votmesona}, leheNumber=${this.leheNumber}`);

    this.toodeTeenus.otsiTooteidPaginate(this.leheNumber - 1, this.leheSuurus, votmesona)
    .subscribe(this.tootleVastust());
  }

  kasitleToodeNimekiri() {
    const onKategooriaId: boolean = this.marsruut.snapshot.paramMap.has('id');

    if (onKategooriaId) {
      this.praeguneKategooriaId = +this.marsruut.snapshot.paramMap.get('id');
    } else {
      this.praeguneKategooriaId = 1;
    }



    if (this.eelmineKategooriaId != this.praeguneKategooriaId) {
      this.leheNumber = 1;
    }

    this.eelmineKategooriaId = this.praeguneKategooriaId;

    console.log(`praeguneKategooriaId=${this.praeguneKategooriaId}, leheNumber=${this.leheNumber}`);


    // nüüd tagasta tooted vastava kategooria ID-ga
    this.toodeTeenus.getToodeNimekiriPaginate(
      this.leheNumber - 1, 
      this.leheSuurus, 
      this.praeguneKategooriaId)
      .subscribe(this.tootleVastust());
  }

  tootleVastust() {
    return andmed => {
      this.tooted = andmed._embedded.tooted;
      this.leheNumber = andmed.page.number + 1;
      this.leheSuurus = andmed.page.size;
      this.artikleidKokku = andmed.page.totalElements
    }
  }

  uuendaLeheSuurust(leheSuurus: number) {
    this.leheSuurus = leheSuurus;
    this.leheNumber = 1;
    this.nimekirjastaTooted();
  }
}
