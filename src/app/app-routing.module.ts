import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { RegionComponent } from './pages/region/region.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailRegionComponent } from './pages/detail-region/detail-region.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
