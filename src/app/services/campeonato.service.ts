import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campeonato } from '../models/campeonato.model';

const apiURL = "https://api.api-futebol.com.br/v1/"

const httpOptions = {
  headers: new HttpHeaders( 
    {
      'Authorization': 'Bearer test_d5bac1f39ae31d27cd060d824c75ee'
    }
  )
};

@Injectable()
export class CampeonatoService {

  constructor(private http:HttpClient) { }

  getCampeonato(id:number): Observable<Campeonato> {
    return this.http.get<Campeonato>(apiURL + "campeonatos/"+id, httpOptions)
  }

  getAllCampeonatos(): Observable<Campeonato[]> {
    return this.http.get<Campeonato[]>(apiURL + "campeonatos/", httpOptions)
  }

}
