import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'app';

  constructor(private dataService: DataService, private router: Router) {  }

  ngOnInit() {
    this.dataService.storeDataInLocalStorage();
  }

  isDashboard() {
    return this.router.url !== '/dashboard';
  }

  ngOnDestroy() {
    this.dataService.removeDataFromLocalStorage();
  }

  navigateDashboard(e) {
    e.preventDefault();
    this.router.navigate(['/dashboard']);
  }
}
