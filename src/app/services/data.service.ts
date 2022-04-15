import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getSome(count: number) {
    return this.http.get(`${ this.baseUrl }?limit=${ count }`);
  }

  getOne(name: string) {
    return this.http.get(`${ this.baseUrl }/${ name }`);
  }
}
