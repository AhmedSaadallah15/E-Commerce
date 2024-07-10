import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChangeUserDataComponent } from './components/change-user-data/change-user-data.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SettingsComponent,
    ChangePasswordComponent,
    ChangeUserDataComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule
  ],

})
export class SettingsModule { }
