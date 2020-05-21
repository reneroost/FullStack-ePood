import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toode } from '../yldine/toode';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToodeKategooria } from '../yldine/toode-kategooria';

@Injectable({
  providedIn: 'root'
})
export class ToodeService {
  
  private baasUrl = 'http://localhost:8080/api/tooted';
  private kategooriaUrl = 'http://localhost:8080/api/toote-kategooria';
  
  constructor(private httpClient: HttpClient) { }
  
  getToodeKategooriad(): Observable<ToodeKategooria[]> {
    return this.httpClient.get<SaaVastusToodeKategooria>(this.kategooriaUrl).pipe(
      map(vastus => vastus._embedded.toodeKategooria)
    );
  }
  
  getToodeNimekiri(kategooriaId: number): Observable<Toode[]> {
    const otsingUrl = `${this.baasUrl}/search/findByKategooriaId?id=${kategooriaId}`;
    
    return this.saaTooteid(otsingUrl);
  }
  
  
  otsiTooteid(votmesona: string) {
    const otsingUrl = `${this.baasUrl}/search/findByNimiContaining?nimi=${votmesona}`;
    
    return this.saaTooteid(otsingUrl);
  }

  private saaTooteid(otsingUrl: string) {
    return this.httpClient.get<SaaVastusToode>(otsingUrl).pipe(map(vastus => vastus._embedded.tooted));
  }
}

interface SaaVastusToode {
  _embedded: {
    tooted: Toode[];
  }
}

interface SaaVastusToodeKategooria {
  _embedded: {
    toodeKategooria: ToodeKategooria[];
  }
}