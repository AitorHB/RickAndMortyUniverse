import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '@environment/environment';
import { Observable, catchError, of } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query = "", page = 1) {
    const filter = `${API.CHARACTERS}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter)
  }

  getDetails(id: number) {
    const filter = `${API.CHARACTERS}/${id}`;
    return this.http.get<Character>(filter)
  }

}
