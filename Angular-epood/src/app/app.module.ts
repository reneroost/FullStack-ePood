import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToodeNimekiriComponent } from './komponendid/toode-nimekiri/toode-nimekiri.component';
import { ToodeService } from './teenused/toode.service';

@NgModule({
  declarations: [
    AppComponent,
    ToodeNimekiriComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ToodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
