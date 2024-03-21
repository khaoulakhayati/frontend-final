import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../models/RegisterRequest';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent  implements OnInit {

  loginForm: AuthenticationRequest = {
    login: '',
    password: ''
  };
  login!: string;


  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
/*
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      const decodedToken = this.authService.decodeToken(accessToken);
      console.log('User ID:', decodedToken.userId); // Assurez-vous que le nom de la propriété userId est correct
    }
  */
  }
onSubmit() {
  this.authService.authenticate(this.loginForm).subscribe(
    response => {
      const accessToken = response.access_token;
      const refreshToken = response.refresh_token;
      
      // Storing tokens in the AuthService
      this.authService.setTokens(accessToken, refreshToken);
      
      const decodedToken = this.authService.decodeToken(accessToken);
      
      // Storing user info in session
      sessionStorage.setItem('user_info', JSON.stringify(decodedToken));
      
      this.authService.getUserBylogin(decodedToken.sub).subscribe(
        (user: RegisterRequest) => {
          // Storing user details in session
          sessionStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/acceuil']);
        },
        error => {
          console.error(error);
        }
      );
    },
    error => {
      console.error(error);
    }
  );
}


  

}
