import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './pages/incidents/home/home.component';
import { HomeUserComponent } from './pages/user_managment/home-user/home-user.component';
import { UserHomeComponent } from './pages/user_managment/user-home/user-home.component';


const routes: Routes = [

  {
    path: 'navbar',
    component: NavbarComponent,
 
  },
  {
    path: 'login',
    component: AuthenticationComponent,
  },
  {
    path: 'acceuil',
    component: DashboardComponent,

  },
 
  {
    path: 'homeuseer',
    component: UserHomeComponent ,
  }
  
  
,
 
  { path: 'home', component: HomeComponent ,

},

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
