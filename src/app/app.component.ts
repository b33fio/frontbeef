import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeefApiService } from './beef-api/beef-api.service';
import { User } from './beef-api/classes/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Beef Master Test';
  user:User;
  constructor(public beefApiService: BeefApiService,private router: Router,private route: ActivatedRoute){};
  ngOnInit() {
    //this.ngAfterViewChecked()
    this.user = this.beefApiService.getUser();
  }

  ngAfterViewChecked() {
  }
}
