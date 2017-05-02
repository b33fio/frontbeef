import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GlobalBrowserComponent } from './global-browser/global-browser.component';
import { ChannelBrowserComponent } from './channel-browser/channel-browser.component';
import { MyDebatesComponent } from './my-debates/my-debates.component';

import { BeefApiService } from '../beef-api/beef-api.service';
import { TrendingComponent } from './trending/trending.component';
import { DebateCarouselComponent } from './debate-carousel/debate-carousel.component';

@NgModule({
  imports: [
      CommonModule,
      RouterModule
  ],
  declarations: [GlobalBrowserComponent, ChannelBrowserComponent, MyDebatesComponent, TrendingComponent, DebateCarouselComponent],
  exports: [GlobalBrowserComponent, ChannelBrowserComponent,TrendingComponent,DebateCarouselComponent],
  providers: [BeefApiService],
})
export class BeefBrowserModule { }
