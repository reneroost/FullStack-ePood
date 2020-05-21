import { Component, OnInit } from '@angular/core';
import { ToodeService } from 'src/app/teenused/toode.service';
import { ActivatedRoute } from '@angular/router';
import { Toode } from 'src/app/yldine/toode';

@Component({
  selector: 'app-toode-detail',
  templateUrl: './toode-detail.component.html',
  styleUrls: ['./toode-detail.component.css']
})
export class ToodeDetailComponent implements OnInit {

  toode: Toode = new Toode();

  constructor(private toodeTeenus: ToodeService,
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

}
