import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DevExtremeModule } from 'devextreme-angular';

import { ClassesComponent } from '../app/components/classes/classes.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { HomeComponent } from '../app/components/home/home.component';
import { PublicComponent } from '../app/components/layouts/public/public.component';
import { UserComponent } from '../app/components/layouts/user/user.component';
import { LoginComponent } from '../app/components/login/login.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { SearchComponent } from '../app/components/search/search.component';
import { SidebarComponent } from '../app/components/sidebar/sidebar.component';
import { AuthService } from '../app/services/auth.service';
import { HttpService } from '../app/services/http.service';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ResponseInterceptor } from './interceptors/responses.interceptor';
import { MaterialImportModule } from './material-module';
import { NotificationService } from './services/notification.service';
import { SpinnerService } from './services/spinner.service';
import { ProfessorLandingComponent } from './components/professor-landing/professor-landing.component';
import { StudentsLandingComponent } from './components/students-landing/students-landing.component';


const appRoutes: Routes = [
  {path: '', component: PublicComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'professor-landing', component: ProfessorLandingComponent},
    {path: 'students-landing', component: StudentsLandingComponent}
  ]},
  {path: 'user', component: UserComponent, children: [
    {path: ':role/dashboard/:id', component: DashboardComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    SearchComponent,
    ClassesComponent,
    PublicComponent,
    UserComponent,
    NavbarComponent,
    SidebarComponent,
    SpinnerComponent,
    ProfessorLandingComponent,
    StudentsLandingComponent,
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialImportModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    SpinnerService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
