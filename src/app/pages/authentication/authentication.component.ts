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

  ngOnInit(): void {}
  onSubmit() {
    this.authService.authenticate(this.loginForm).subscribe(
      response => {
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
  
        const decodedToken = this.authService.decodeToken(accessToken);
  
        localStorage.setItem('user_info', JSON.stringify(decodedToken));
        const userInfo = localStorage.getItem('user_info');
        if (userInfo !== null) {
          const userInfoObject = JSON.parse(userInfo);
          this.login = userInfoObject.sub;
  
          this.authService.getUserBylogin(this.login).subscribe(
            (user: RegisterRequest) => {
              localStorage.setItem('user', JSON.stringify(user));
              this.router.navigate(['/acceuil']);
            },
            error => {
              console.error(error);
            }
          );
        } else {
          // Item doesn't exist
        }
      },
      error => {
        console.error(error);
      }
    );
  }


  

}
