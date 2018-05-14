import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageModule } from '@ngx-pwa/local-storage';
import { HttpClientModule } from '@angular/common/http';


import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LocalStorageModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
