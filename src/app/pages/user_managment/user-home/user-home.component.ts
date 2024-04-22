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
  userlist:any
  user!: User;
  constructor(private dialog: MatDialog, private _formBuilder: FormBuilder , private userService : UserService) {}
  ngOnInit(): void {
this.userService.getAllUsers().subscribe(data=>{
  this.userlist=JSON.parse(JSON.stringify(data));
  console.log("list user",this.userlist)
})  }
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
    this.showForm = !this.showForm  ;
    this.isAddingUser = true;
    this.isEditable = true;
    //this.selectedUser = null;

  }

  editUser() {
    console.log('User to modify :', this.selectedUser);
    this.isEditingUser = true;
    this.showForm = true;
    this.isEditable = true;
    // Si l'édition est souhaitée dès la modification, décommentez cette ligne
    /*if (this.selectedUser) {
      this.selectedUser.emit(this.selectedUser);

  }*/
  }
  cancelForm() {
    this.showForm = false;
    this.isAddingUser = false;
    this.isEditingUser = false;
    this.selectedUser = null;
    this.isEditable = false;
    this.options.reset();
    this.selectedRowIndex = -1; // Assurez-vous de réinitialiser l'état d'édition
  }
  

}