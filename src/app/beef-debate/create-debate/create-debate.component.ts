import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { BeefApiService } from '../../beef-api/beef-api.service';

@Component({
  selector: 'app-create-debate',
  templateUrl: './create-debate.component.html',
  styleUrls: ['./create-debate.component.css']
})
export class CreateDebateComponent implements OnInit {
    channels: any[];
    title : string;
    channel : string;
    loggedIn = false;

    submitted = false;
    message;

    constructor(private route : ActivatedRoute,
                private router : Router,
                private beefApi : BeefApiService)
    {
    }


    ngOnInit() {
        this.beefApi.getChannels().then(x => {
            this.channels = x.json()['channels'];
        });
        this.loggedIn = !!this.beefApi.getUser();
        console.log(this.loggedIn);
    }

    onSubmit() {
      this.submitted = true;
        this.beefApi.createDebate(this.title, this.channel).then((res)=>{
            try{
                res.json();
            } catch (e){
                this.submitted = false;
                this.message = "Server Error, Try again!";
                return;
            }
            if(res.status===200 && res.json().successful){
                let debate_id = res.json()['debate_id'];
                this.router.navigate([`/debate/${debate_id}`]);
            } else {
                this.submitted = false;
                this.message = "Server responded with: " + res.json().error;
            }
      });
    }

}
