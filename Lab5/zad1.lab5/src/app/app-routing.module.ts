import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotoZoomComponent } from './photo-zoom/photo-zoom.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'zoom', component: PhotoZoomComponent},
  {path: 'photos/:id', component: PhotoZoomComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
