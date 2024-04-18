import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { AgenceService } from '../../../service/agence.service';
import { Agence } from '../../../models/agence';
import { CLIENT_RENEG_LIMIT } from 'tls';
@Component({
  selector: 'app-agency-search',
  templateUrl: './agency-search.component.html',
  styleUrl: './agency-search.component.scss'
})
export class AgencySearchComponent {

  agencies : Agence [] =[];
  hideRequiredControl = new FormControl(false);
floatLabelControl = new FormControl('auto' as FloatLabelType);
options: FormGroup;

isAgencySelected: boolean = false;
isProfileSelected: boolean = false;
isLastNameSelected: boolean = false;
isFirstNameSelected: boolean = false;
isAgencynameSelected: boolean = false;
isAccountEnabledSelected: boolean = false;

Agencies: any[] = [
  { agency: 'Agence 1', profile: 'Profile 1', lastName: 'Doe', firstName: 'John', Agencyname: 'johndoe', accountEnabled: true },
  { agency: 'Agence 2', profile: 'Profil 2', lastName: 'Smith', firstName: 'Alice', Agencyname: 'asmith', accountEnabled: false },
  { agency: 'Agence 3', profile: 'Profil 3', lastName: 'Brown', firstName: 'Bob', Agencyname: 'bbrown', accountEnabled: true },
];

@Output() selectedAgency: EventEmitter<any> = new EventEmitter<any>();

selectedRowIndex: number = -1;

constructor(private _formBuilder: FormBuilder,private AgenceService: AgenceService ) {
  this.options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,

  });
}

ngOnInit() {
this.getAgencies();

}

getFloatLabelValue(): FloatLabelType {
  return this.floatLabelControl.value || 'auto';
}

selectAgency(Agency: any, index: number) {
  console.log("agency sélectionné :", Agency);
  this.selectedRowIndex = index;
  this.selectedAgency.emit(Agency);
}

hasData(fieldModel: any): boolean {
  return fieldModel && fieldModel !== '';
}

getAgencies() {
  this.AgenceService.getAllAgencies()
      .subscribe((agencies: Agence[]) => {
          this.agencies = agencies;
      });
}

}