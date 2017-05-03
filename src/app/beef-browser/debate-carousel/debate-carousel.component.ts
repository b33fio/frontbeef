import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeefApiService } from '../../beef-api/beef-api.service';
 import { $ } from 'jquery';
@Component({
  selector: 'app-debate-carousel',
  templateUrl: './debate-carousel.component.html',
  styleUrls: ['./debate-carousel.component.css']
})
export class DebateCarouselComponent implements OnInit {
  @Input('debates') allDebates:any[];
  @Input() count:number;

  trimmedDebates;
  constructor(private beefApiService: BeefApiService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.allDebates);
    console.log(this.count);
    this.trimmedDebates = this.allDebates.splice(0,this.count);
  }

  goToDebate(id){
    this.router.navigate(["debate",id]);
  }

}
