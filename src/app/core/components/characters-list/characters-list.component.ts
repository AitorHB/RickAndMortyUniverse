import { Component } from '@angular/core';
import { RESOURCES } from '../../../environment/environment';
import { AsyncPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { take } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../models/character.model';
import { CharacterCardComponent } from '../../../shared/character-card/character-card.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Params, Router } from '@angular/router';
type RequestInfo = {
  next: string
}

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [AsyncPipe, FormsModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, CharacterCardComponent, MatChipsModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})
export class CharactersListComponent {

  myControl = new FormControl('');
  characterList: Character[] = [];
  info: RequestInfo = {
    next: ""
  }
  private pageNumber: number = 1;
  private query: string = "";
  characterListLoaded: boolean = false;
  inputValue: string = '';

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCharactersByQuery();
  }

  onSearch(inputValue: string) {
    if (inputValue && inputValue.length > 3) {
      this.router.navigate(['/character-list'], { queryParams: { q: inputValue } })
    }
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(
      take(1)
    ).subscribe((params: Params) => {
      console.log("Params => ", params)
      this.query = params['q'];
      this.getDataFromService();
    })
  }

  private getDataFromService(): void {
    this.characterService.searchCharacters(this.query, this.pageNumber)
      .pipe(
        take(1)
      )
      .subscribe((response: any) => {
        if (response?.results?.length) {
          const { info, results } = response;
          this.characterList = [...this.characterList, ...results]
          this.info = info;
          this.characterListLoaded = true;
        } else {
          this.characterList = [];
        }
      });
  }


}
