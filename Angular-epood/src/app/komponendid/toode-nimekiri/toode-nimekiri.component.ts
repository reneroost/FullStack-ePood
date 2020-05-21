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
  praeguseKategooriaId: number;
  otsinguSeisund: boolean;

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

    this.toodeTeenus.otsiTooteid(votmesona).subscribe(
      andmed => {
        this.tooted = andmed;
      }
    );
  }

  kasitleToodeNimekiri() {
    const onKategooriaId: boolean = this.marsruut.snapshot.paramMap.has('id');

    if (onKategooriaId) {
      this.praeguseKategooriaId = +this.marsruut.snapshot.paramMap.get('id');
    } else {
      this.praeguseKategooriaId = 1;
    }

    this.toodeTeenus.getToodeNimekiri(this.praeguseKategooriaId).subscribe(
      andmed => {
        //console.log('Toode Nimekiri=' + JSON.stringify(andmed));
        this.tooted = andmed;
      }
    );
  }

}
