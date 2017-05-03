import { Component, OnInit } from '@angular/core';
import { BeefApiService } from '../../beef-api/beef-api.service';

@Component({
  selector: 'app-verify-message',
  templateUrl: './verify-message.component.html',
  styleUrls: ['./verify-message.component.css']
})
export class VerifyMessageComponent implements OnInit {

  constructor(private beefApi : BeefApiService) { }

  ngOnInit() {
    this.beefApi.setTitle("Verify Your Account");
  }

}
