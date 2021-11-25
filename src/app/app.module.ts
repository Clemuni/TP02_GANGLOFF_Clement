import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaisieComponent } from './saisie/saisie.component';

import { FormsModule } from '@angular/forms';
import { AdresseComponent } from './adresse/adresse.component';

@NgModule({
  declarations: [AppComponent, SaisieComponent, AdresseComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
