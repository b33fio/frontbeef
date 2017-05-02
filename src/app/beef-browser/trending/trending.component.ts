import { Component, OnInit } from '@angular/core';
import { BeefApiService } from '../../beef-api/beef-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private beefApiService: BeefApiService,private router: Router,private route: ActivatedRoute) { }
  message;
  debates;
  ngOnInit() {
    this.beefApiService.getDebates().then( (res) => {
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
