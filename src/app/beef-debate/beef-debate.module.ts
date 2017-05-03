import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {ShareButtonsModule} from 'ng2-sharebuttons';

import { DebateComponent } from './debate/debate.component';
import { BeefApiService } from '../beef-api/beef-api.service';
import { PointComponent } from './point/point.component';
import { CreateDebateComponent } from './create-debate/create-debate.component';


@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ShareButtonsModule.forRoot()
  ],
  declarations: [DebateComponent, PointComponent, CreateDebateComponent],
  exports: [DebateComponent, PointComponent],
  providers: [BeefApiService]
})
export class BeefDebateModule { }
