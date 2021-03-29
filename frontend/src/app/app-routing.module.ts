import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { HomepageComponent } from './homepage/homepage.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {LoginComponent} from './login/login.component'
import { MatchesComponent } from './matches/matches.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  { path: ''                , component: HomepageComponent},
  { path: 'Geolocation'     , component: GeolocationComponent},
  { path: 'About-us'        , component: AboutusComponent},
  { path: 'Login'           , component: LoginComponent},
  { path: 'Matches'         , component: MatchesComponent},
  { path: 'Profile'         , component: ProfileComponent},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }