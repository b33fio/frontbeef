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
    channels : any[];
    error:string;

    constructor(private beefApi : BeefApiService) {
    }

    ngOnInit() {
        this.beefApi.setTitle("Browse Channels");
        this.beefApi.getChannels().then(res => {
            try{
                res.json();
            } catch (e){
                this.beefApi.setTitle("Server Error");
                this.error = "Server Delivered Invalid Response";
                return;
            }
            if(res.status===200){
                this.channels = res.json().channels;
            } else {
                this.beefApi.setTitle("Server Error");
                this.error = "Server Delivered Invalid Response";
            }
        });
    }
}
