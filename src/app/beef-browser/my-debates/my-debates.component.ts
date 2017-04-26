import { Component, OnInit } from '@angular/core';

import { BeefApiService } from '../../beef-api/beef-api.service';
import { Debate } from '../../beef-api/classes/debate';

@Component({
  selector: 'app-my-debates',
  templateUrl: './my-debates.component.html',
  styleUrls: ['./my-debates.component.css']
})
export class MyDebatesComponent implements OnInit {
    debates: Debate[];

    constructor(private beefApi : BeefApiService) {
        // TODO: set this to current session user's debates
        this.debates = beefApi.getDebates();
    }

    ngOnInit() {

    }
}
