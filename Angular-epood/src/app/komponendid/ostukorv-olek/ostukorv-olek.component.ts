import { Component, OnInit } from '@angular/core';
import { OstukorvService } from 'src/app/teenused/ostukorv.service';

@Component({
  selector: 'app-ostukorv-olek',
  templateUrl: './ostukorv-olek.component.html',
  styleUrls: ['./ostukorv-olek.component.css']
})
export class OstukorvOlekComponent implements OnInit {

  koguSumma: number = 0.00;
  yldKogus: number = 0;

  constructor(private ostukorvTeenus: OstukorvService) { }

  ngOnInit(): void {
    this.uuendaOstukorviOlekut();
  }

  uuendaOstukorviOlekut() {
    this.ostukorvTeenus.ostukorvSumma.subscribe(
      andmed => this.koguSumma = andmed
    );

    this.ostukorvTeenus.yldKogus.subscribe(
      andmed => this.yldKogus = andmed
    );
  }

}
