import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {

  user: any;
  isLangueEnabled: boolean = false;
  success!: string;
  error!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        this.user = user;
        this.isLangueEnabled = true;
      },
      error: (error) => {
        console.error("Error fetching current user", error);
      }
    });
  }

  updateUserProfile() {
    this.userService.store(this.user).subscribe(() => {
      this.success = 'OK';
    }, () => {
      this.error = 'NOK';
    });
  }
}