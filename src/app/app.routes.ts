import { Routes } from '@angular/router';
import { HomeComponent } from '../app/core/components/home/home.component';
import { CharactersListComponent } from '../app/core/components/characters-list/characters-list.component';
import { CharacterCardComponent } from './shared/character-card/character-card.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'character-list', component: CharactersListComponent},
    { path: 'character-card', component: CharacterCardComponent},
    { path: '**', redirectTo: 'character-card' }, // Sustituir por un componente adecuado para habilitar una ruta de pagina erronea o no encontrada
];
