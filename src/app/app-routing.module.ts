import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AlbumsDetailComponent } from './components/albums-detail/albums-detail.component';
import { PhotosDetailComponent } from './components/photos-detail/photos-detail.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path: "albums",component:AlbumsDetailComponent},
  {path:"albums/:albumId",component:PhotosDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
