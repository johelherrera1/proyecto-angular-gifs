import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StickersComponent } from './stickers/stickers.component';
import { GifsComponent } from './gifs/gifs.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { BannerComponent } from './banner/banner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';


import{HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { GifModule } from './gif/gif.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StickersComponent,
    GifsComponent,
    CuerpoComponent,
    BannerComponent,
    NavBarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    GifModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
