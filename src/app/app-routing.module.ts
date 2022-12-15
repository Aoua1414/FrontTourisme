import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { RegionComponent } from './pages/region/region.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailRegionComponent } from './pages/detail-region/detail-region.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ListeRegionComponent } from './pages/liste-region/liste-region.component';
import { PopComponent } from './pages/pop/pop.component';
import { AjoutComponent } from './pages/ajout/ajout.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"accueil",
    pathMatch:'full'
  },
  {
    path:"accueil",
    component:AccueilComponent
  },
  {
    path:"region",
    component:RegionComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"detail",
    component:DetailRegionComponent
  },
  {
    path:"profil",
    component:ProfilComponent
  },
  {
    path:"liste",
    component:ListeRegionComponent
  },
  {
    path:"pop",
    component:PopComponent
  },
  {
    path:"ajout",
    component:AjoutComponent
  },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
