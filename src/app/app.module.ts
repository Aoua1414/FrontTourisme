import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { RegionComponent } from './pages/region/region.component';
import { DetailRegionComponent } from './pages/detail-region/detail-region.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ListeRegionComponent } from './pages/liste-region/liste-region.component';
import { PopComponent } from './pages/pop/pop.component';
import { AjoutComponent } from './pages/ajout/ajout.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RegionComponent,
    DetailRegionComponent,
    ContactComponent,
    ProfilComponent,
    ListeRegionComponent,
    PopComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
