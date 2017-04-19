import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DebateComponent } from './debate/debate.component';
import { BeefApiService } from '../beef-api/beef-api.service';
import { PointComponent } from './point/point.component';

@NgModule({
  imports: [
      CommonModule,
      RouterModule
  ],
  declarations: [DebateComponent, PointComponent],
  exports: [DebateComponent, PointComponent],
  providers: [BeefApiService]
})
export class BeefDebateModule { }
