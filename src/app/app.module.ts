import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importez votre module de routage
import { RouterModule } from '@angular/router'; // Importez RouterModule
import { AppComponent } from './app.component';
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
import { UserHomeComponent } from './pages/user_managment/user-home/user-home.component';
import { UserFormComponent } from './pages/user_managment/user-form/user-form.component';
import { UserSearchComponent } from './pages/user_managment/user-search/user-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AgencyFormComponent } from './pages/Agency-managment/agency-form/agency-form.component';
import { AgencyHomeComponent } from './pages/Agency-managment/agency-home/agency-home.component';
import { AgencySearchComponent } from './pages/Agency-managment/agency-search/agency-search.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { AgencylistComponent } from './agencylist/agencylist.component';

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
    UserHomeComponent,
    UserFormComponent,
    UserSearchComponent,
    ProfilComponent,
    AgencyFormComponent,
    AgencyHomeComponent,
    AgencySearchComponent,
    ChangePasswordComponent,
    AgencylistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
    BrowserAnimationsModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);}
  //The HttpLoaderFactory function is required for AOT (ahead of time) compilation in your project.