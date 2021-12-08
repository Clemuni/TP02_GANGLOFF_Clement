import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaisieComponent } from './saisie/saisie.component';

import { FormsModule } from '@angular/forms';
import { AdresseComponent } from './adresse/adresse.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { RecapComponent } from './recap/recap.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [AppComponent, SaisieComponent, AdresseComponent, HeaderComponent, FooterComponent, ClientFormComponent, RecapComponent, InputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
