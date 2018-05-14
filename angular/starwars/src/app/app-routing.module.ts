import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'films/:id', component: FilmComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,
                                  FilmComponent,
                                  FilmsComponent,
                                  CharactersComponent,
                                  CharacterComponent,
                                  NotfoundComponent];
