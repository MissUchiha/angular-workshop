import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { ICharacter } from '../character';
import { DataService } from '../data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public character: ICharacter;

  public showClass: string = 'hide';

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.character = this.dataService.getCharacter(params.get('id'));
    })
  }

  saveRate() {
    this.dataService.updateCharacter(this.character);
    this.router.navigate(['/characters',{ selectedId: this.character.id}]);
  }

  resetRate() {
    this.character.rate = null;
  }
  
}
