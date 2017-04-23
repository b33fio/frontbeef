import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BeefApiService } from '../../beef-api/beef-api.service';

import { Channel } from '../../beef-api/classes/channel';

@Component({
  selector: 'global-browser',
  templateUrl: './global-browser.component.html',
  styleUrls: ['./global-browser.component.css']
})
export class GlobalBrowserComponent implements OnInit {
    channels : Channel[];

    constructor(private beefApi : BeefApiService) {
        this.channels = beefApi.getChannels();
        console.log(this.channels);
    }

    ngOnInit() {
    }
}
