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

  getToodeNimekiri(kategooriaId: number): Observable<Toode[]> {
    const otsingUrl = `${this.baasUrl}/search/findByKategooriaId?id=${kategooriaId}`;

    return this.saaTooteid(otsingUrl);
  }

  getToodeNimekiriPaginate(leheNumber: number,
    leheSuurus: number,
    kategooriaId: number): Observable<SaaVastusToode> {
    const otsingUrl = `${this.baasUrl}/search/findByKategooriaId?id=${kategooriaId}` +
      `&page=${leheNumber}&size=${leheSuurus}`;

    return this.httpClient.get<SaaVastusToode>(otsingUrl);
  }

  getToode(toodeId: number): Observable<Toode> {
    const toodeUrl = `${this.baasUrl}/${toodeId}`;

    return this.httpClient.get<Toode>(toodeUrl);
  }

  otsiTooteid(votmesona: string) {
    const otsingUrl = `${this.baasUrl}/search/findByNimiContaining?nimi=${votmesona}`;

    return this.saaTooteid(otsingUrl);
  }

  otsiTooteidPaginate(
    leheNumber: number,
    leheSuurus: number,
    votmesona: string): Observable<SaaVastusToode> {
    const otsingUrl = `${this.baasUrl}/search/findByNimiContaining?nimi=${votmesona}` +
      `&page=${leheNumber}&size=${leheSuurus}`;

    return this.httpClient.get<SaaVastusToode>(otsingUrl);
  }

  private saaTooteid(otsingUrl: string) {
    return this.httpClient.get<SaaVastusToode>(otsingUrl).pipe(map(vastus => vastus._embedded.tooted));
  }

  getToodeKategooriad(): Observable<ToodeKategooria[]> {
    return this.httpClient.get<SaaVastusToodeKategooria>(this.kategooriaUrl).pipe(
      map(vastus => vastus._embedded.toodeKategooria)
    );
  }
}

interface SaaVastusToode {
  _embedded: {
    tooted: Toode[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface SaaVastusToodeKategooria {
  _embedded: {
    toodeKategooria: ToodeKategooria[];
  }
}