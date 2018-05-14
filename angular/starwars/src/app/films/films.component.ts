import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  public films;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.films = this.dataService.getFilms();
  }

  navFilm(film) {
    this.router.navigate(["/films", film.id]);
  }
  
}
