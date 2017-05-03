import { Component, OnInit } from '@angular/core';
import { BeefApiService } from '../../beef-api/beef-api.service';
import { Debate } from '../../beef-api/classes/debate';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-my-debates',
  templateUrl: './my-debates.component.html',
  styleUrls: ['./my-debates.component.css']
})
export class MyDebatesComponent implements OnInit {
    debates: any[];
    message;

    constructor(private beefApiService: BeefApiService,private router: Router,private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.beefApiService.setTitle("My Debates");
        this.beefApiService.getMyDebates().then((res) => {
            try{
                res.json();
            } catch (e){
                return;
            }
            if(res.status===200){
                this.debates= res.json().debates;
            } else {
                this.message = 'Server responded with: "Unable to Fetch Your Debates';
            }
        });
    }
    goToDebate(id){
        this.router.navigate(["debate",id]);
    }
}
