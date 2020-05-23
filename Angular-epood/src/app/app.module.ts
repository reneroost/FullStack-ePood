import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ToodeNimekiriComponent } from './komponendid/toode-nimekiri/toode-nimekiri.component';
import { ToodeService } from './teenused/toode.service';
import { ToodeKategooriaMenyyComponent } from './komponendid/toode-kategooria-menyy/toode-kategooria-menyy.component';
import { OtsingComponent } from './komponendid/otsing/otsing.component';
import { ToodeDetailComponent } from './komponendid/toode-detail/toode-detail.component';
import { OstukorvOlekComponent } from './komponendid/ostukorv-olek/ostukorv-olek.component';
import { OstukorvDetailidComponent } from './komponendid/ostukorv-detailid/ostukorv-detailid.component';


const marsruudid: Routes = [
  { path: 'ostukorv-detailid', component: OstukorvDetailidComponent },
  { path: 'tooted/:id', component: ToodeDetailComponent },
  { path: 'search/:votmesona', component: ToodeNimekiriComponent },
  { path: 'kategooria/:id', component: ToodeNimekiriComponent },
  { path: 'kategooria', component: ToodeNimekiriComponent },
  { path: 'tooted', component: ToodeNimekiriComponent },
  { path: '', redirectTo: '/tooted', pathMatch: 'full' },
  { path: '**', redirectTo: '/tooted', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    ToodeNimekiriComponent,
    ToodeKategooriaMenyyComponent,
    OtsingComponent,
    ToodeDetailComponent,
    OstukorvOlekComponent,
    OstukorvDetailidComponent
  ],
  imports: [
    RouterModule.forRoot(marsruudid),
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ToodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
