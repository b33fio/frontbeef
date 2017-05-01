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
  model = new User();
  submitted = false;
  onSubmit() { 
    this.submitted = true; 
    let req = {
      first_name: this.model.name,
      username: this.model.username,
      user_type: "user",
      password: this.model.password,
      password_check: this.model.password,
      email: this.model.email,
      phone_number: +this.model.phone
    };

    this.beefApiService.register(req).then((res)=>{
      if(res.status==200){
        this.router.navigate([""]);
      } else {
        this.submitted = false; 
        this.message = "Server responded with: " + res.json().error;
      }
    });

    //TODO: Call the api service to send the data
    //confirm success to user
    //redirect to home/browser page
  }

}
