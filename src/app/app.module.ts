import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BeefBrowserModule } from './beef-browser/beef-browser.module'
import { BeefLandingModule } from './beef-landing/beef-landing.module'
import { BeefDebateModule } from './beef-debate/beef-debate.module'
import { BeefUtilitiesModule } from './beef-utilities/beef-utilities.module'
import { BeefAccountModule } from './beef-account/beef-account.module'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './beef-landing/home-page/home-page.component';
import { GlobalBrowserComponent } from './beef-browser/global-browser/global-browser.component';
import { ChannelBrowserComponent } from './beef-browser/channel-browser/channel-browser.component';
import { MyDebatesComponent } from './beef-browser/my-debates/my-debates.component';
import { BeefNotFoundComponent } from './beef-utilities/beef-not-found/beef-not-found.component';
import { DebateComponent } from './beef-debate/debate/debate.component';
import { CreateDebateComponent } from './beef-debate/create-debate/create-debate.component';
import { LoginComponent } from './beef-account/login/login.component';
import { LogoutComponent } from './beef-account/logout/logout.component';
import { SignupComponent } from './beef-account/signup/signup.component';
import { SettingsComponent } from './beef-account/settings/settings.component';
import { BeefApiService } from './beef-api/beef-api.service';
import { VerifyComponent } from './beef-account/verify/verify.component';
import { VerifyMessageComponent } from './beef-account/verify-message/verify-message.component';

const appRoutes: Routes = [
  //landing page, handles login/sign up
  {
    path: '',
    component: HomePageComponent
  },
  //browse top debates
  { path: 'browse',
    component: GlobalBrowserComponent
  },
  //browse debates within a given (pre-defined channels)
  { path: 'browse/:channel',
    component: ChannelBrowserComponent
  },
  //browse debates within a given (pre-defined channels)
  { path: 'mydebates',
    component: MyDebatesComponent
  },
  // create new debate
  { path: 'debate/new',
      component: CreateDebateComponent
  },
  //look at a debate (open/in-progres/closed as spectator/participant/public)
  { path: 'debate/:id',
    component: DebateComponent
  },
  //view account settings and edit
  { path: 'settings',
    component: SettingsComponent
  },
  //view account settings and edit
  { path: 'signup',
    component: SignupComponent
  },
  //view account settings and edit
  { path: 'login',
    component: LoginComponent
  },
    { path: 'verify/:token',
    component: VerifyComponent
  },
  { path: 'verify',
    component: VerifyMessageComponent
  },
  //any other route gets redirected to a PageNotFound component
  { path: '**',
   component: BeefNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ useHash: true }),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BeefAccountModule,
    BeefBrowserModule,
    BeefDebateModule,
    BeefLandingModule,
    BeefUtilitiesModule
  ],
  providers: [BeefApiService,Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
