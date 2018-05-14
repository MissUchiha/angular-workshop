import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ICharacter } from '../character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @Input() characters: ICharacter[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateCharacter(id) {
    this.router.navigate(['/characters', id]);
  }
  
}
