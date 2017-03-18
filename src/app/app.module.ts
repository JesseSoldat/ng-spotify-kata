import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Jumbotron } from './components/jumbotron/jumbotron.component';
import { Navbar } from './components/navbar/navbar.component';

import { Home } from './components/pages/home.component';
import { About } from './components/pages/about.component';

const appRoutes: Routes = [
  { path: '', component: Home},
  { path: 'about', component: About}

];

@NgModule({
  declarations: [
    AppComponent,
    Jumbotron,
    Navbar,
    Home,
    About
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
