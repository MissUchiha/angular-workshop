import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { IFilm } from '../film';
import { ICharacter } from '../character';
import { DataService } from '../data.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  public film: IFilm;

  public characters: ICharacter[];

  public showClass: string = 'hide';

  public message: string;

  public isError: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.film = this.dataService.getFilm(params.get('id'));
      this.characters = this.dataService.getCharactersFromFilm(this.film);
    })
  }

  saveNumViews() {
    if(this.film.numViews < 0) {
      this.message = "Number of views must be positive!";
      this.isError = true;
      return;
    }

    this.isError = false;
    this.dataService.updateFilm(this.film);
    this.message = 'Succesffully saved number of views.';
  }

  showCharacters() {
    this.showClass = (this.showClass === 'hide') ? 'show' : 'hide';
  }

  navNext() {
    const id = parseInt(this.film.id);
    const nextId = (id === this.dataService.getFilmsLength()) ? 1 : id + 1;
    this.router.navigate(['films', nextId]);
  }

  navPrevious() {
    const id = parseInt(this.film.id);
    const prevId = (id ===  1) ?  this.dataService.getFilmsLength() : id - 1;
    this.router.navigate(['films', prevId]);
  }
  
}
