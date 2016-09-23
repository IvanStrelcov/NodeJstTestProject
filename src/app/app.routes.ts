import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }       from './login';
import { SignUpComponent }      from './sign-up';
import { ReportComponent }      from './report';
import { NoContentComponent }   from './no-content';

const Routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'report', component: ReportComponent },
  { path: '**',    component: NoContentComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(Routes, {useHash: true});
