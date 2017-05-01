import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './verify/verify.component';
import { VerifyMessageComponent } from './verify-message/verify-message.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [LoginComponent, SettingsComponent, LogoutComponent, SignupComponent, VerifyComponent, VerifyMessageComponent]
})
export class BeefAccountModule { }
