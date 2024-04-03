import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
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
    { agency: 'Agence 1', profile: 'Profil 1', lastName: 'Doe', firstName: 'John', username: 'johndoe', accountEnabled: true },
    { agency: 'Agence 2', profile: 'Profil 2', lastName: 'Smith', firstName: 'Alice', username: 'asmith', accountEnabled: false },
    { agency: 'Agence 3', profile: 'Profil 3', lastName: 'Brown', firstName: 'Bob', username: 'bbrown', accountEnabled: true },
  ];

  @Output() selectedUser: EventEmitter<any> = new EventEmitter<any>();

  selectedRowIndex: number = -1;

  constructor(private _formBuilder: FormBuilder) {
    this.options = this._formBuilder.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit() {}

  cancelSearch() {
    this.isAgencySelected = false;
    this.isProfileSelected = false;
    this.isLastNameSelected = false;
    this.isFirstNameSelected = false;
    this.isUsernameSelected = false;
    this.isAccountEnabledSelected = false;
    this.options.reset();
    this.selectedRowIndex = -1;
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
}
