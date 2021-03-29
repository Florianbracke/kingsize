import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component'
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [

  { path: ''                , component: HomepageComponent},
  { path: 'Login'           , component: LoginComponent},
  { path: 'Matches'         , component: MatchesComponent},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }