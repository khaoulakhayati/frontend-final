import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../models/RegisterRequest';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent  implements OnInit {
  loginForm: FormGroup;

 
  login!: string;


  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  ngOnInit(): void {

  }
  onSubmit() {
    // Vérifiez si le formulaire est valide avant de le soumettre
    if (this.loginForm.valid) {
      // Extraire les valeurs du formulaire
      const { login, password } = this.loginForm.value;
  
      // Appel de la méthode authenticate avec les valeurs extraites du formulaire
      this.authService.authenticate({ login, password }).subscribe(
        response => {
          const accessToken = response.access_token;
          const refreshToken = response.refresh_token;
          
          // Storing tokens in the AuthService
          this.authService.setTokens(accessToken, refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          const decodedToken = this.authService.decodeToken(accessToken);
       
          this.authService.getUserBylogin(decodedToken.sub).subscribe(
            (user: RegisterRequest) => {
              sessionStorage.setItem('user', JSON.stringify(user));
              alert(' login successful');
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
  

  

}
