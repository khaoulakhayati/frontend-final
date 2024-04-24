import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ChangePasswordRequest } from '../../models/ChangePasswordRequest';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  newPassword: string = '';
  confirmPassword: string = '';
  userId: number | undefined;
  passwordChangeSuccess: boolean | null = null;
  passwordsDoNotMatch: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        this.userId = user.id;
      },
      error: (error) => {
        console.error('Error retrieving current user:', error);
      }
    });
  }

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.passwordsDoNotMatch = true;
      this.passwordChangeSuccess = false;
      return;
    }

    this.passwordsDoNotMatch = false;

    if (!this.newPasswordIsValid() || !this.passwordIsStrongEnough()) {
      // Include additional validation messaging as needed
      return;
    }

    if (this.userId !== undefined) {
      const changePasswordRequest: ChangePasswordRequest = {
        currentPassword: '', // You need to collect the current password from the user as well
        newPassword: this.newPassword,
        confirmationPassword: this.confirmPassword
      };

      this.userService.changePassword(changePasswordRequest).subscribe({
        next: () => {
          this.passwordChangeSuccess = true;
          // Handle successful password change (e.g., navigate away or show a message)
        },
        error: (error) => {
          this.passwordChangeSuccess = false;
          console.error('Error changing password:', error);
          // Handle unsuccessful password change (e.g., show an error message)
        }
      });
    } else {
      console.error('Cannot change password. User ID is undefined.');
    }
  }

  newPasswordIsValid(): boolean {
    return this.newPassword.length >= 4 && this.newPassword.length <= 50;
  }

  passwordIsStrongEnough(): boolean {
    const hasUppercase = /[A-Z]/.test(this.newPassword);
    const hasLowercase = /[a-z]/.test(this.newPassword);
    const hasNumber = /[0-9]/.test(this.newPassword);
    const hasSpecialChar = /[\W_]/.test(this.newPassword); // Simplified regex for special characters
    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
  }
}
