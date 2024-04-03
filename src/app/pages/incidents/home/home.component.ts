import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FloatLabelType } from '@angular/material/form-field';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedRowIndex: number = -1;
  showForm: boolean = false;
  selectedIncident: any;
  isAddingIncident: boolean = false;
  isEditingIncident: boolean = false;
 isEditable: boolean = false;
  constructor(private dialog: MatDialog , private _formBuilder: FormBuilder ) {}
  onIncidentSelected(incident: any) {
    this.selectedIncident = incident;
    this.isEditingIncident = true;
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
    this.isAddingIncident = true;
    this.isEditable = true;
  }
  editIncident() {
    console.log('Incident à modifier :', this.selectedIncident);
    this.isEditingIncident = true;
    this.showForm = true;
     this.isEditable = true // Si l'édition est souhaitée dès la modification, décommentez cette ligne
  }
  cancelForm() {
    this.showForm = false;
    this.isAddingIncident = false;
    this.isEditingIncident = false;
    this.selectedIncident = null;
    this.isEditable = false;
    this.options.reset();
    this.selectedRowIndex = -1;// Assurez-vous de réinitialiser l'état d'édition
  }
}