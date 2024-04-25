import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './pages/incidents/home/home.component';
import { UserHomeComponent } from './pages/user_managment/user-home/user-home.component';
import { AgencyHomeComponent } from './pages/Agency-managment/agency-home/agency-home.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
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
    path: 'profile',
    component: ProfilComponent,
 
  },
  {
    path: 'acceuil',
    component: DashboardComponent,

  },
 
  {
    path: 'userhome',
    component: UserHomeComponent ,
  }

,

{
 path: 'changepassword',
 component: ChangePasswordComponent
  ,

},


{
  path: 'agence',
  component: AgencyHomeComponent,

},
 
  { path: 'home',
   component:HomeComponent ,},

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
