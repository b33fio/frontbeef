import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BeefApiService } from '../../beef-api/beef-api.service';

@Component({
  selector: 'global-browser',
  templateUrl: './global-browser.component.html',
  styleUrls: ['./global-browser.component.css']
})
export class GlobalBrowserComponent implements OnInit {
    channels : any[];

    constructor(private beefApi : BeefApiService) {
        this.channels = beefApi.getChannels();
    }

    ngOnInit() {
    }
}
