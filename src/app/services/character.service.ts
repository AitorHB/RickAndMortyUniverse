import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../environment/environment';
import { Observable, catchError, of } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<Character[] | undefined> {
    return this.http.get<Character[]>(API.CHARACTERS).pipe(
      catchError(() => {
        return of(undefined);
      })
    )
  }

}
