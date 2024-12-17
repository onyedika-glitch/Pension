// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: MainContentComponent }, // Landing page
  { path: 'register', component: RegistrationComponent } // Registration page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }