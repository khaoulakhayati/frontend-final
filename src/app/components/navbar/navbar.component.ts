import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) { }
  // private authService: AuthService, 
  logout(): void {
    // this.authService.logout().subscribe(
    //   () => {
    //     // Rediriger vers la page de login après le logout
    //     this.router.navigate(['/login']);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  }
  
}
