import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout().subscribe(
      () => {
        // Rediriger vers la page de login après le logout
        this.router.navigate(['/login']);
      },
      error => {
        console.error(error);
      }
    );
  }
}
