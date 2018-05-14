import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { LocalStorage } from '@ngx-pwa/local-storage';

import { IFilm } from './film';
import { ICharacter } from './character';

@Injectable()
export class DataService {

  private url: string = 'https://swapi.co/api';

  constructor(private http: HttpClient, private localStorage: LocalStorage) { }

  private getIdFromPath(path): string {
    return path.slice(path.slice(0, -1).lastIndexOf('/') + 1, -1);
  }
  private getFilmDataFromServer(): Observable<object>  {
    return this.http.get<object>(this.url + '/films');
  }

  private getCharacterDataFromServer(): Observable<object[]>  {
    return forkJoin(...Array.from(Array(9).keys()).map(e =>
      this.http.get<object>(this.url + '/people/?page=' + (e+1))
    ));
  }

  private adjustFilmData(film) {
    film.numViews = null;
    film.id = this.getIdFromPath(film.url);

    film.episodeId = film.episode_id;
    film.desc = film.opening_crawl;
    delete film.episode_id;
    delete film.opening_crawl;

    film.characters = film.characters.map(el => {
      return {
        id: this.getIdFromPath(el)
      };
    });

    return film;
  }

  storeDataInLocalStorage() {
    console.log('Storing data in localStorage!')
    this.getCharacterDataFromServer().subscribe(data => {
      data = [].concat(...data.map(el => {
        return el['results'].map(res => {
          res.rate = null;
          res.id = this.getIdFromPath(res.url);
          return res;
        });
      }));
      localStorage.setItem('characters', JSON.stringify(data));
    });

    this.getFilmDataFromServer().subscribe(data => {
      data['results'].map(e => {
        return this.adjustFilmData(e);
      });
      localStorage.setItem('films', JSON.stringify(data['results']));
    });
  }

  removeDataFromLocalStorage() {
    localStorage.removeItem('films');
    localStorage.removeItem('characters');
  }

  getFilms(): IFilm[] {
    return JSON.parse(localStorage.getItem('films'));
  }

  getCharacters(): ICharacter[] {
    return JSON.parse(localStorage.getItem('characters'));
  }

  getFilm(id): IFilm {
    return JSON.parse(localStorage.getItem('films')).find(film => film.id === id);
  }

  getFilmsLength(): number {
    return JSON.parse(localStorage.getItem('films')).length;
  }

  getCharacter(id): ICharacter {
    return JSON.parse(localStorage.getItem('characters')).find(char => char.id === id);
  }

  updateFilm(film: IFilm) {
    const updatedFilms = JSON.parse(localStorage.getItem('films'))
                             .map(f => (f.id === film.id) ? film : f);
    localStorage.setItem('films', JSON.stringify(updatedFilms));
  }

  updateCharacter(character: ICharacter) {
    const updatedCharacters = JSON.parse(localStorage.getItem('characters'))
                                  .map(c => (c.id === character.id) ? character : c);
    localStorage.setItem('characters', JSON.stringify(updatedCharacters));
  }

  getCharactersFromFilm(film: IFilm): ICharacter[] {
    const filmCharacters = JSON.parse(localStorage.getItem('films')).find(f => f.id === film.id).characters;
    return JSON.parse(localStorage.getItem('characters')).filter(c => c.id in filmCharacters);
  }
}
