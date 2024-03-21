import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DialogComponent } from './components/dialog/dialog.component';
import { ManagementUserComponent } from './pages/management-user/management-user.component';
import { CreeuserComponent } from './pages/creeuser/creeuser.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { FormOutilComponent } from './pages/outils/form-outil/form-outil.component';
import { SearchOutilComponent } from './pages/outils/search-outil/search-outil.component';
import { HomeOutilComponent } from './pages/outils/home-outil/home-outil.component';
import {MatTabsModule} from '@angular/material/tabs'; 
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    FormComponent,
    SearchIncidentComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    DialogComponent,
    ManagementUserComponent,
    CreeuserComponent,
    UserlistComponent,
    FormOutilComponent,
    SearchOutilComponent,
    HomeOutilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    CommonModule ,
    MatTableModule ,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatDatepickerModule,
    MatGridListModule,
    FontAwesomeModule,
    MatTabsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ['*'], 
        disallowedRoutes: [] 
      }
    })
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    provideClientHydration(),
    provideAnimationsAsync()

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
