import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { BeefAccountModule } from '../beef-account/beef-account.module';
import { BeefBrowserModule } from '../beef-browser/beef-browser.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BeefAccountModule,
    BeefBrowserModule
  ],
  declarations: [HomePageComponent]
})
export class BeefLandingModule { }
