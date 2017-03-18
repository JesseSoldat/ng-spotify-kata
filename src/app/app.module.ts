import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Jumbotron } from './components/jumbotron/jumbotron.component';
import { Navbar } from './components/navbar/navbar.component';
import { Search } from './components/search/search.component';

import { Home } from './components/pages/home.component';
import { About } from './components/pages/about.component';
import { Artists } from './components/pages/artist.component';
import { Albums } from './components/pages/album.component';

import { SpotifyService } from './services/spotify.service';

const appRoutes: Routes = [
  { path: '', component: Home},
  { path: 'about', component: About},
  { path: 'artist/:id', component: Artists},
  { path: 'album/:id', component: Albums}


];

@NgModule({
  declarations: [
    AppComponent,
    Jumbotron,
    Navbar,
    Search,
    Home,
    About,
    Artists,
    Albums
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
