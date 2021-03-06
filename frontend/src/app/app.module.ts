import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularTokenModule } from 'angular-token';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { MaterializeModule } from 'angular2-materialize';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000'
     }),
    AppRoutingModule
  ],
  providers: [ AngularTokenModule, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
