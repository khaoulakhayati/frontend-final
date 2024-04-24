import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FloatLabelType } from '@angular/material/form-field';
import { User } from '../../../models/user';
import { UserService } from '../../../service/user.service';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss'
})
export class UserHomeComponent implements OnInit {

  selectedRowIndex: number = -1;
  showForm: boolean = false;
  selectedUser: any;
  isAddingUser: boolean = false;
  isEditingUser: boolean = false;
  isEditable: boolean = false;
  userlist: any;

  constructor(private dialog: MatDialog, private _formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.userlist = JSON.parse(JSON.stringify(data));
      console.log("list user", this.userlist);
    });
  }

  onUserSelected(user: User) {
    this.selectedUser = user;
    this.isEditingUser = true;
    this.isEditable = false;
    this.showForm = true;
  }

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);

  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  toggleForm() {
    this.showForm = !this.showForm;
    this.isAddingUser = true;
    this.isEditable = true;
  }

  addNewUser() {
    this.isAddingUser = true;
    this.isEditingUser = false;
    this.isEditable = true;
    this.showForm = true;
  }

  editUser(user: User) {
    this.selectedUser = user;
    this.isEditingUser = true;
    this.showForm = true;
    this.isAddingUser = false;
    this.isEditable = true;
  }

  cancelForm() {
    this.showForm = false;
    this.isAddingUser = false;
    this.isEditingUser = false;
    this.selectedUser = null;
    this.isEditable = false;
    this.options.reset();
    this.selectedRowIndex = -1;
  }

  refreshUsers() {
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.userlist = users;
        console.log("User list updated successfully");
      },
      error: (err) => {
        console.error('Error fetching users', err);
        alert('Failed to refresh the user list');
      }
    });
  }

  deleteUser(userId: number) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          console.log('User deleted successfully');
          this.refreshUsers();
        },
        error: (err) => {
          console.error('Error deleting user', err);
          alert('Failed to delete the user');
        }
      });
    }
  }
}