import { Component, OnInit } from '@angular/core';
import { User } from '../../beef-api/classes/user'
import { BeefApiService } from '../../beef-api/beef-api.service';
import { Router, ActivatedRoute} from '@angular/router'
import { LoginComponent } from '../../beef-account/login/login.component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public beefApiService: BeefApiService,private router: Router,private route: ActivatedRoute) { }
  user:User;

  ngOnInit() {
    this.user = this.beefApiService.getUser();
    this.beefApiService.setTitle("Home: Trending");
  }

  ngAfterViewChecked() {
    
  }
}
