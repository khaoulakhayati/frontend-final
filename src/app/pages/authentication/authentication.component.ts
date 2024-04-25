import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';

 // authentication.component.ts

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})



  export class AuthenticationComponent {

    
    authRequest: AuthenticationRequest = { username: '', password: '' }; 
    errorMsg: string[] = [];
    
    constructor(
      private router: Router,
      private authService: AuthService
    ) {}
    login(): void {
      this.authService.authenticate(this.authRequest).subscribe({
        next: (response) => {
          const authToken = response.access_token;
          console.log("authToken") // Extract the token value correctly
          this.authService.storeAuthToken(authToken);
      console.log('fdsfsdfdsf',authToken)
          if (authToken) {
            this.router.navigate(['/acceuil']); // Redirect the user
          } else {
            this.errorMsg = ['No access token received'];
          }
        },
        error: (error) => {
          this.errorMsg = [error.error.message || 'Authentication failed']; // Handle errors
        }
      });

    }

    }
    
    
    
    