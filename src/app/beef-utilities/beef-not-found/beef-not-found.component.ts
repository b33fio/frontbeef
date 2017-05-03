import { Component, OnInit } from '@angular/core';
import { BeefApiService } from '../../beef-api/beef-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beef-not-found',
  templateUrl: './beef-not-found.component.html',
  styleUrls: ['./beef-not-found.component.css']
})
export class BeefNotFoundComponent implements OnInit {

  constructor(public beefApiService: BeefApiService,private router : Router) { }

  ngOnInit() {
    this.beefApiService.setTitle("Beef Not Found");
  }

  goHome(){
    this.router.navigate([""]);
  }

}
