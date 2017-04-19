import { Component, OnInit } from '@angular/core';
import { SignupForm } from "./signup-form";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  model = new SignupForm();
  submitted = false;
  onSubmit() { 
    this.submitted = true; 
    //TODO: Call the api service to send the data
    //confirm success to user
    //redirect to home/browser page
  }

}
