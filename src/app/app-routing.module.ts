import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component'
import { MatchesComponent } from './matches/matches.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';



const routes: Routes = [

  { path: ''                , component: HomepageComponent},
  { path: 'Login'           , component: LoginComponent},
  { path: 'Matches'         , component: MatchesComponent},
  { path: 'Profile'         , component: ProfileComponent},
  { path: 'Settings'        , component: SettingsComponent},  
  { path: 'Chat'            , component: ChatInboxComponent},
  { path: 'About-us'        , component: AboutUsComponent},
  { path: '**'              , component: PageNotFoundComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }