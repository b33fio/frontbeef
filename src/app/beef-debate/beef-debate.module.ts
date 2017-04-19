import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DebateComponent } from './debate/debate.component';
import { BeefApiService } from '../beef-api/beef-api.service';

@NgModule({
  imports: [
      CommonModule,
      RouterModule
  ],
  declarations: [DebateComponent],
  exports: [DebateComponent],
  providers: [BeefApiService]
})
export class BeefDebateModule { }
