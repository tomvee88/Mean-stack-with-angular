import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: HomeComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
