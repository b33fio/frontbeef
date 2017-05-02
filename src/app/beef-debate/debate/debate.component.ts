import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { BeefApiService } from '../../beef-api/beef-api.service';

import { Debate } from '../../beef-api/classes/debate';
import { Point } from '../../beef-api/classes/point';

@Component({
  selector: 'app-debate',
  templateUrl: './debate.component.html',
  styleUrls: ['./debate.component.css']
})

export class DebateComponent implements OnInit {
    debate : any;
    points : Point[];
    rows : any[];
    pointText : string;
    postPermission : boolean;
    nextPoster : string;
    showPostForm : boolean;

    constructor(private route : ActivatedRoute,
                private router : Router,
                private beefApi : BeefApiService)
    {
    }

    ngOnInit() {
        this.route.params.subscribe(
            x => this.beefApi.getDebateById(x['id'])
            .then(x => {
                this.debate = x['debate'];
                this.points = x['points'];
                this.generateRows();
                this.showPostForm = false;

                console.log(this.debate);

                var user = this.beefApi.getUser();
                console.log(user);
                if (user) {
                    if (user['username'] == this.nextPoster)
                        this.showPostForm = true;
                }
            }));
    }

    importModel(id : number) {
        this.debate = this.beefApi.getDebateById(id);
        this.points = this.beefApi.getPointsByDebate(id);

    }

    submitPoint() {
        // TODO: get this working with API
        //this.beefApi.addPoint(1, 1, this.pointText);
        //this.points = this.beefApi.getPointsByDebate(1);
        //this.generateRows();
        //this.postPermission = false;
    }

    generateRows() {
        var rows = [];

        // used to determine "snaking" of points
        var rowNumber = 0;

        var arrowDirection = "right";

        // Collect points into rows
        for (var i = 0; i < this.points.length-1; i += 2, rowNumber += 1) {

            if (rowNumber % 2 == 0) {
                rows.push({
                    "leftPoint": this.points[i],
                    "rightPoint": this.points[i+1],
                    "arrowDirection": arrowDirection
                });
            } else {
                rows.push({
                    "leftPoint": this.points[i+1],
                    "rightPoint": this.points[i],
                    "arrowDirection": arrowDirection
                });
            }

            if (arrowDirection == "left")
                arrowDirection = "right";
            else
                arrowDirection = "left";
        }

        // Add pending point
        if (this.points.length == 1) {
            rows.push({
                "leftPoint": this.points[this.points.length-1],
                "rightPoint": {"point_text": "Pending..."},
                "arrowDirection": arrowDirection
            });
            this.nextPoster = this.debate['opponent_username'];
        } else if(this.points.length % 2 != 0) {
            if (rowNumber % 2 != 0) {
                rows.push({
                    "leftPoint": {"point_text": "Pending..."},
                    "rightPoint": this.points[this.points.length-1],
                    "arrowDirection": arrowDirection
                });
                this.nextPoster = this.debate['proponent_username'];
            } else {
                rows.push({
                    "leftPoint": this.points[this.points.length-1],
                    "rightPoint": {"point_text": "Pending..."},
                    "arrowDirection": arrowDirection
                });
                this.nextPoster = this.debate['opponent_username'];
            }
        } else {
            if (rowNumber % 2 != 0) {
                rows.push({
                    "leftPoint": null,
                    "rightPoint": {"point_text": "Pending..."},
                    "arrowDirection": null
                });
                this.nextPoster = this.debate['opponent_username'];
            } else {
                rows.push({
                    "leftPoint": {"point_text": "Pending..."},
                    "rightPoint": null,
                    "arrowDirection": null
                });
                this.nextPoster = this.debate['proponent_username'];
            }
        }

        this.rows = rows;
    }
}
