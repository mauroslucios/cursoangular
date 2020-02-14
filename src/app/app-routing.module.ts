import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './courses/course-list.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './errors/error.component'


const routes: Routes = [
  { path: 'dashboard', component: CourseListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo:'/login', pathMatch:'full'},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
