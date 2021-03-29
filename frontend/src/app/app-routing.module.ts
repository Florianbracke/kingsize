import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component'
import { MatchesComponent } from './matches/matches.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: ''                , component: HomepageComponent},
  { path: 'Login'           , component: LoginComponent},
  { path: 'Matches'         , component: MatchesComponent},
  { path: '**'              , component: PageNotFoundComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }