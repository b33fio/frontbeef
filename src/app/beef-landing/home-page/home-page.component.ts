import { Component, OnInit } from '@angular/core';
import { User } from '../../beef-api/classes/user'
import { BeefApiService } from '../../beef-api/beef-api.service';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private beefApiService: BeefApiService,private router: Router,private route: ActivatedRoute) { }
  user:User;

  ngOnInit() {
    this.user = this.beefApiService.getUser();
  }

  ngAfterViewChecked() {
    this.user = this.beefApiService.getUser();
  }

}
