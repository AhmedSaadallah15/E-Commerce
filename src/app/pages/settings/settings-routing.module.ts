import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChangeUserDataComponent } from './components/change-user-data/change-user-data.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: 'settings/privacy', component: ChangePasswordComponent },
      { path: 'settings/userData', component: ChangeUserDataComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
