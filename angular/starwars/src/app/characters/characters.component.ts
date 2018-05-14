import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ICharacter } from '../character';
import { DataService } from '../data.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public characters: ICharacter[];

  public selectedId;

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('selectedId'));
    })
    this.characters = this.dataService.getCharacters();
  }

  navChar(char) {
    this.router.navigate(['/characters', char.id]);
  }
  
}
