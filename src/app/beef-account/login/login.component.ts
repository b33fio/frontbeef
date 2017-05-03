import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from "../../beef-api/classes/login-credentials";
import { BeefApiService } from '../../beef-api/beef-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../beef-api/classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private beefApiService: BeefApiService,private router: Router,private route: ActivatedRoute) { }
  ngOnInit() {
    //TODO: either re-generate session, or simple redirect to hom page if already logged in
  }
  
  model = new LoginCredentials();
  submitted = false;
  message;

  onSubmit() { 
    this.submitted = true; 
    this.beefApiService.login(this.model).then((res)=>{
      try{
        res.json();
      } catch (e){
        this.submitted = false; 
        this.message = "Server Responded with: Invalid Username or Password";
        return;
      }
      if(res.status===200 && res.json().successful){
        let user:User = new User();
        user.username = this.model.username;
        user.id = res.json()['user_id'];
        this.beefApiService.setCurrentUser(user);
        this.beefApiService.setJwt(res.json().jwt);
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
