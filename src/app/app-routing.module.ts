import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifsComponent } from './gifs/gifs.component';
import { HomeComponent } from './home/home.component';
import { StickersComponent } from './stickers/stickers.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"stickers",component:StickersComponent},
  {path:"gifs",component:GifsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
