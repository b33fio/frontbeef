import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { BeefApiService } from '../../beef-api/beef-api.service';

@Component({
  selector: 'channel-browser',
  templateUrl: './channel-browser.component.html',
  styleUrls: ['./channel-browser.component.css']
})
export class ChannelBrowserComponent implements OnInit {
    channelName : any;
    debates : any[];

    constructor(private route : ActivatedRoute,
                private router : Router,
                private beefApi : BeefApiService)
    {
    }

    ngOnInit() {
        this.beefApi.setTitle("Channel Browser");
        this.route.params.subscribe(x => {this.channelName = x['channel']; this.beefApi.setTitle(this.channelName);});
        //TODO: change this to debates by channel
        this.debates = undefined;
        this.beefApi.getDebatesByChannelName(this.channelName)
            .then(x => this.debates = x);
    }



}
