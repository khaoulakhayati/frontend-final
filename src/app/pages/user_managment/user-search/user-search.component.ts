import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { UserService } from '../../../service/user.service';
import { utilisateur } from '../../../models/user';
import { CLIENT_RENEG_LIMIT } from 'tls';
 
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss'
})
export class UserSearchComponent {
utilisateurs : utilisateur [] =[];
  hideRequiredControl = new FormControl(false);
floatLabelControl = new FormControl('auto' as FloatLabelType);
options: FormGroup;

isAgencySelected: boolean = false;
isProfileSelected: boolean = false;
isLastNameSelected: boolean = false;
isFirstNameSelected: boolean = false;
isUsernameSelected: boolean = false;
isAccountEnabledSelected: boolean = false;

users: any[] = [
  { agency: 'Agence 1', profile: 'Profile 1', lastName: 'Doe', firstName: 'John', username: 'johndoe', accountEnabled: true },
  { agency: 'Agence 2', profile: 'Profil 2', lastName: 'Smith', firstName: 'Alice', username: 'asmith', accountEnabled: false },
  { agency: 'Agence 3', profile: 'Profil 3', lastName: 'Brown', firstName: 'Bob', username: 'bbrown', accountEnabled: true },
];

@Output() selectedUser: EventEmitter<any> = new EventEmitter<any>();

selectedRowIndex: number = -1;

constructor(private _formBuilder: FormBuilder,private userservice: UserService ) {
  this.options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,

  });
}

ngOnInit() {
this.getUsers();

}

getFloatLabelValue(): FloatLabelType {
  return this.floatLabelControl.value || 'auto';
}

selectUser(user: any, index: number) {
  console.log("Utilisateur sélectionné :", user);
  this.selectedRowIndex = index;
  this.selectedUser.emit(user);
}

hasData(fieldModel: any): boolean {
  return fieldModel && fieldModel !== '';
}

getUsers() {
  this.userservice.getUsers()
      .subscribe((utilisateurs: utilisateur[]) => {
          this.utilisateurs = utilisateurs;
      });
}

}