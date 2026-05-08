import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';

export const routes: Routes = [
  {
    path: 'welcome', component: Welcome
  },
  {
    path: 'login', component: Login
  },
  {
    path: 'signup', component: Signup
  },
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'welcome'
  }
];
