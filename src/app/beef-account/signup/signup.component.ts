import { Component, OnInit } from '@angular/core';
import { User } from '../../beef-api/classes/user';
import { BeefApiService } from '../../beef-api/beef-api.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  constructor(private beefApiService: BeefApiService,private router: Router,private route: ActivatedRoute) { }
  ngOnInit() {
  }
  message;
  model:any = new User();
  submitted = false;
  onSubmit() { 
    if(this.model.password != this.model.confirm_password){
      this.message = "Passowrds do not match";
      return;
    }
    this.submitted = true; 
    let req = {
      first_name: this.model.name,
      username: this.model.username,
      user_type: "user",
      password: this.model.password,
      email: this.model.email,
      phone_number: 12345
    };

    this.beefApiService.register(req).then((res)=>{
      if(res.status==200&& res.json().successful){
        this.router.navigate(["verify"]);
      } else {
        this.submitted = false; 
        this.message = res.json().error;
      }
    }).catch((err)=>{
      this.submitted = false; 
      try{
        this.message = err.json().error;
      }catch(e){
        this.message = "Service Unavailable at this time";
      }
      
    });

    //TODO: Call the api service to send the data
    //confirm success to user
    //redirect to home/browser page
  }

}
