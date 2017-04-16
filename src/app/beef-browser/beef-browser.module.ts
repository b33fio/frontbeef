import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalBrowserComponent } from './global-browser/global-browser.component';
import { ChannelBrowserComponent } from './channel-browser/channel-browser.component';
import { MyDebatesComponent } from './my-debates/my-debates.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GlobalBrowserComponent, ChannelBrowserComponent, MyDebatesComponent],
  exports: [GlobalBrowserComponent, ChannelBrowserComponent]
})
export class BeefBrowserModule { }
