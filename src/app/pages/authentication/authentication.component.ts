
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})



  export class AuthenticationComponent {
 /* 
    authRequest: AuthenticationRequest = { username: '', password: '' };
    errorMsg: Array<string> = [];
  
    constructor(
      private router: Router,
      private authService: AuthService,
      private tokenService: TokenService
    ) {}
  
    login() {
      this.errorMsg = [];
      this.authService.authenticate({
        body: this.authRequest
      }).subscribe({
        next: (res) => {
          this.tokenService.token = res.token as string;
          this.router.navigate(['books']);
        },
        error: (err) => {
          console.log(err);
          if (err.error.validationErrors) {
            this.errorMsg = err.error.validationErrors;
          } else {
            this.errorMsg.push(err.error.errorMsg);
          }
        }
      });
    }*/
  }
  