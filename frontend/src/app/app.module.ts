import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header_components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { HomepageComponent } from './homepage/homepage.component';

import { LoginComponent } from './login/login.component';
import { MatchesComponent } from './matches/matches.component';
import { SettingsComponent } from './settings/settings.component';


//Material components
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { HeaderloginComponent } from './header_components/headerlogin/headerlogin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeadermatchesComponent } from './header_components/headermatches/headermatches.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderprofileComponent } from './header_components/headerprofile/headerprofile.component';
import { HeadersettingsComponent } from './header_components/headersettings/headersettings.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatSliderModule } from '@angular/material/slider';
  





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    MatchesComponent,
    SettingsComponent,
    HeaderloginComponent,
    PageNotFoundComponent,
    HeadermatchesComponent,
    ProfileComponent,
    HeaderprofileComponent,
    HeadersettingsComponent,
    ChatInboxComponent,
    AboutUsComponent,
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatRippleModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
