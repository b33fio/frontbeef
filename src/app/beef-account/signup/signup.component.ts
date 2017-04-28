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

  model = new User();
  submitted = false;
  onSubmit() { 
    this.submitted = true; 

    this.beefApiService.register(this.model).then((res)=>{
      console.log(res.json());
      if(res.status==200){
        this.router.navigate([""]);
      } else {
        this.submitted = false; 
        alert("invalid registracion, HANDLE ME!");
      }
    });

    //TODO: Call the api service to send the data
    //confirm success to user
    //redirect to home/browser page
  }

}
