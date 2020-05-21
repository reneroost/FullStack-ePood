import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otsing',
  templateUrl: './otsing.component.html',
  styleUrls: ['./otsing.component.css']
})
export class OtsingComponent implements OnInit {

  constructor(private ruuter: Router) { }

  ngOnInit(): void {
  }

  sooritaOtsing(otsingSona: string) {
    console.log(`otsingSona=${otsingSona}`);
    this.ruuter.navigateByUrl(`/search/${otsingSona}`)
  }

}
