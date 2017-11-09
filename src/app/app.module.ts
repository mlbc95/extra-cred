
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DevExtremeModule} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { HomeComponent } from '../app/components/home/home.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { SearchComponent } from '../app/components/search/search.component';
import { ClassesComponent } from '../app/components/classes/classes.component';
import { PublicComponent } from '../app/components/layouts/public/public.component';
import { UserComponent } from '../app/components/layouts/user/user.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { SidebarComponent } from '../app/components/sidebar/sidebar.component';

const appRoutes: Routes= [
  {path:'', component:PublicComponent, children:[
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ]},
  {path:'user',component:UserComponent, children:[
    {path:'dashboard',component:DashboardComponent}
    
  ]}
  
]

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
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
