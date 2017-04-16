import { Component, OnInit } from '@angular/core';
import { LoginForm } from "./login-form";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  
  model = new LoginForm();
  submitted = false;
  onSubmit() { 
    this.submitted = true; 
    //TODO: Call the api service to send the data
    //confirm success to user
    //redirect to home/browser page
  }
}
