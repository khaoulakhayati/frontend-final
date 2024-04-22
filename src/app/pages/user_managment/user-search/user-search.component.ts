import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { UserService } from '../../../service/user.service';
import { User } from '../../../models/user';
import { CLIENT_RENEG_LIMIT } from 'tls';
 
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss'
})
export class UserSearchComponent  implements OnInit{
Users : User [] =[];
  hideRequiredControl = new FormControl(false);
floatLabelControl = new FormControl('auto' as FloatLabelType);
options: FormGroup;

isAgencySelected: boolean = false;
isProfileSelected: boolean = false;
isLastNameSelected: boolean = false;
isFirstNameSelected: boolean = false;
isUsernameSelected: boolean = false;
isAccountEnabledSelected: boolean = false;
userlist:any
user!: User

@Output() selectedUser: EventEmitter<any> = new EventEmitter<any>();

selectedRowIndex: number = -1;

constructor(private _formBuilder: FormBuilder,private userservice: UserService ) {
  this.options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,

  });
}

ngOnInit(): void {
  this.userservice.getAllUsers().subscribe(data=>{
    this.userlist=JSON.parse(JSON.stringify(data));
    console.log("list user",this.userlist)
  })  }

getFloatLabelValue(): FloatLabelType {
  return this.floatLabelControl.value || 'auto';
}

selectUser(user: any, index: number) {
  console.log("User sélectionné :", user);
  this.selectedRowIndex = index;
  this.selectedUser.emit(user);
}

hasData(fieldModel: any): boolean {
  return fieldModel && fieldModel !== '';
}

getUsers() {
  this.userservice.getAllUsers()
      .subscribe((Users: User[]) => {
          this.Users = Users;
      });
}

}