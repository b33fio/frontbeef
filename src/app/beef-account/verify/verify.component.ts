import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BeefApiService } from '../../beef-api/beef-api.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(private route : ActivatedRoute,
                private router : Router,
                private beefApi : BeefApiService) { }
  token;
  confirmed;
  rejected;
  loading;
  ngOnInit() {
    this.beefApi.setTitle("Confirming Account");
    this.loading=true;
    this.route.params.subscribe((x) => {
      this.token = x['token'];
      console.log(this.token);
      
      this.beefApi.verifyToken(this.token).then((res)=>{
        if(res.status==200&&res.json().successful){
          this.confirmed=true;
        } else {
          this.loading=false;
          this.rejected=true;
        }
        this.loading=false;
      });
    }); 
  }

  goHome(){
    this.router.navigate([""]);
  }

}
