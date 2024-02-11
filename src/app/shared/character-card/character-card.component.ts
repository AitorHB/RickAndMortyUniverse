import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Character } from '../../models/character.model';
import { RESOURCES } from '../../environment/environment';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  id: number = 0;
  name: string = '';
  status: string = '';
  species: string = '';
  type: string = '';
  gender: string = '';
  // origin: Location = {};
  // location: Location = {};
  image: string = '';

  @Input() character: Character = {} as Character;

  constructor() { }

  ngOnInit() {
    this.mapCharacterFields();
  }

  mapCharacterFields() {
    this.id = this.character.id;
    this.name = this.character.name;
    this.status = this.character.status;
    this.species = this.character.species;
    this.type = this.character.type;
    this.gender = this.character.gender;
    // this.origin = this.character.origin;
    // this.location = this.character.location;
    this.image = this.character.image;
  }

}
