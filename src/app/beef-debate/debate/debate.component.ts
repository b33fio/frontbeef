import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { BeefApiService } from '../../beef-api/beef-api.service';

@Component({
  selector: 'app-debate',
  templateUrl: './debate.component.html',
  styleUrls: ['./debate.component.css']
})
export class DebateComponent implements OnInit {
    debate : any;
    points : any[];

    constructor(private route : ActivatedRoute,
                private router : Router,
                private beefApi : BeefApiService)
    {
    }

    ngOnInit() {
        this.route.params.subscribe(
            x => this.importModel(x['id']));
    }

    importModel(id : number) {
        this.debate = this.beefApi.getDebateById(id);
        this.points = this.beefApi.getPointsByDebate(id);
    }

}
