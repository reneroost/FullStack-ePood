import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toode } from '../yldine/toode';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToodeService {

  private baasUrl = 'http://localhost:8080/api/tooted';

  constructor(private httpClient: HttpClient) { }

  getToodeNimekiri(): Observable<Toode[]> {
    return this.httpClient.get<SaaVastus>(this.baasUrl).pipe(
      map(vastus => vastus._embedded.tooted)
    );
  }
}

interface SaaVastus {
  _embedded: {
    tooted: Toode[];
    
  }
}