import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
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
import { ProfessorLandingComponent } from './components/professor-landing/professor-landing.component';
import { ProfessorVerifyComponent } from './components/professor-verify/professor-verify.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ResponseInterceptor } from './interceptors/responses.interceptor';
import { MaterialImportModule } from './material-module';
import { NotificationService } from './services/notification.service';
import { RoutesListeningService } from './services/routes-listening.service';
import { SpinnerService } from './services/spinner.service';
import { SearchDetailComponent } from './components/search-detail/search-detail.component';
import { AddClassFormComponent } from './components/add-class-form/add-class-form.component';


const appRoutes: Routes = [
  {path: '', component: PublicComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'professor-landing', component: ProfessorLandingComponent},
    {path: 'professor-verify', component: ProfessorVerifyComponent},
  ]},
  {path: 'user', component: UserComponent, children: [
    {path: ':role/dashboard/:id', component: DashboardComponent},
    {path:'search/:keyword', component:SearchComponent},
    {path:'search/detail/:id',component:SearchDetailComponent},
    //temp route to view form 
    {path:'form',component:AddClassFormComponent}
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
    ProfessorVerifyComponent,
    SearchDetailComponent,
    AddClassFormComponent
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
    HttpClientModule,
    SlideMenuModule,
    ReactiveFormsModule
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
    NotificationService,
    RoutesListeningService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
