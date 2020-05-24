import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vormista-tellimus',
  templateUrl: './vormista-tellimus.component.html',
  styleUrls: ['./vormista-tellimus.component.css']
})
export class VormistaTellimusComponent implements OnInit {

  vormistaTellimusFormGroup: FormGroup;
  summa: number = 0;
  yldKogus: number = 0;

  constructor(private formBuider: FormBuilder) { }

  ngOnInit(): void {
    this.vormistaTellimusFormGroup = this.formBuider.group({
      klient: this.formBuider.group({
        eesNimi: [''],
        pereNimi: [''],
        email: ['']
      }),
      saatmisAadress: this.formBuider.group({
        tanav: [''],
        asula: [''],
        maakond: [''],
        postiindeks: ['']
      }),
      maksjaAadress: this.formBuider.group({
        tanav: [''],
        asula: [''],
        maakond: [''],
        postiindeks: ['']
      }),
      kaardiAndmed: this.formBuider.group({
        kaardityyp: [''],
        kaardiOmanik: [''],
        kaardiNumber: [''],
        kaardiTurvakood: [''],
        kaardiKeshtivusLoppKp: ['']
      })
    });
  }

  kopeeriAadress(event) {
    if (event.target.checked) {
      this.vormistaTellimusFormGroup.controls.maksjaAadress
        .setValue(this.vormistaTellimusFormGroup.controls.saatmisAadress.value)
    } else {
      this.vormistaTellimusFormGroup.controls.maksjaAadress.reset();
    }
  }

  onSaadaVorm() {
    console.log("Tegelen vormi submissioniga");
    console.log(this.vormistaTellimusFormGroup.get('klient').value);
    console.log("Emaili aadress on " + this.vormistaTellimusFormGroup.get('klient').value.email);
  }

}
