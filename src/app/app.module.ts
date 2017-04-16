import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BeefBrowserModule } from './beef-browser/beef-browser.module'
import { BeefLandingModule } from './beef-landing/beef-landing.module'
import { BeefDebateModule } from './beef-debate/beef-debate.module'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './beef-landing/home-page/home-page.component'

const appRoutes: Routes = [
  //landing page, handles login/sign up
  {
    path: '', 
    component: HomePageComponent
  },

  //browse top debates
  { path: 'browse', 
    component: HomePageComponent
  },

  //browse debates within a given (pre-defined channels)
  // { path: 'browse/:channel',
  //   component: AppComponent
  // },

  //look at a debate (open/in-progres/closed as spectator/participant/public)
  // { path: 'debate/:id',
  //   component: AppComponent
  // },

  //view account settings and edit
  // { path: 'account',
  //   component: AppComponent
  // },

  //any other route gets redirected to a PageNotFound component
  { path: '**', 
   component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BeefBrowserModule,
    BeefLandingModule,
    BeefDebateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
