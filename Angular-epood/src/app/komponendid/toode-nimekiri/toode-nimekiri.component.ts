import { Component, OnInit } from '@angular/core';
import { ToodeService } from 'src/app/teenused/toode.service';
import { Toode } from 'src/app/yldine/toode';

@Component({
  selector: 'app-toode-nimekiri',
  templateUrl: './toode-nimekiri-vork.component.html',
  // templateUrl: './toode-nimekiri-tabel.component.html',
  // templateUrl: './toode-nimekiri.component.html',
  styleUrls: ['./toode-nimekiri.component.css']
})
export class ToodeNimekiriComponent implements OnInit {

  tooted: Toode[];

  constructor(private toodeTeenus: ToodeService) { }

  ngOnInit(): void {
    this.nimekirjastaTooted()
  }

  nimekirjastaTooted() {
    this.toodeTeenus.getToodeNimekiri().subscribe(
      andmed => {
        this.tooted = andmed;
      }
    );
  }

}
