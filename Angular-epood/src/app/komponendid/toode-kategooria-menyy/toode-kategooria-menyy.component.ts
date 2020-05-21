import { Component, OnInit } from '@angular/core';
import { ToodeKategooria } from 'src/app/yldine/toode-kategooria';
import { ToodeService } from 'src/app/teenused/toode.service';

@Component({
  selector: 'app-toode-kategooria-menyy',
  templateUrl: './toode-kategooria-menyy.component.html',
  styleUrls: ['./toode-kategooria-menyy.component.css']
})
export class ToodeKategooriaMenyyComponent implements OnInit {

  toodeKategooriad: ToodeKategooria[];

  constructor(private toodeTeenus: ToodeService) { }

  ngOnInit(): void {
    this.tooteKategooriateNimekiri();
  }

  tooteKategooriateNimekiri() {
    this.toodeTeenus.getToodeKategooriad().subscribe(
      andmed => {
        this.toodeKategooriad = andmed;
      }
    );
  }

}
