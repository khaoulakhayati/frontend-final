import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importez votre module de routage
import { RouterModule } from '@angular/router'; // Importez RouterModule

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { FormComponent } from './pages/incidents/form/form.component';
import { SearchIncidentComponent } from './pages/incidents/search-incident/search-incident.component';
import { HomeComponent } from './pages/incidents/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PaginatorModule } from 'primeng/paginator';
import { HomeUserComponent } from './pages/user_managment/home-user/home-user.component';
import { FormUserComponent } from './pages/user_managment/form-user/form-user.component';
import { SearchComponent } from './pages/user_managment/search/search.component';
import { UserHomeComponent } from './pages/user_managment/user-home/user-home.component';
import { UserFormComponent } from './pages/user_managment/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    FormComponent,
    SearchIncidentComponent,
    HomeComponent,
    DashboardComponent,
    DialogComponent,
    NavbarComponent,
    HomeUserComponent,
    FormUserComponent,
    SearchComponent,
    UserHomeComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]), // Ajoutez RouterModule.forRoot([]) ici
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatDatepickerModule,
    MatGridListModule,
    FontAwesomeModule,
    MatTabsModule,
    PaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
