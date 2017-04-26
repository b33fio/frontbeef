import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from "../../beef-api/classes/login-credentials";
import { BeefApiService } from '../../beef-api/beef-api.service';
import { Router, ActivatedRoute } from '@angular/router'

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

  onSubmit() { 
    this.submitted = true; 
    let success = this.beefApiService.login(this.model);
    if(success){
      this.router.navigate([""]);
    } else {
      this.submitted = false; 
      alert("invalid login, HANDLE ME!");
    }


    //TODO: Call the api service to send the data
    //confirm success to user
    //redirect to home/browser page
  }
}
