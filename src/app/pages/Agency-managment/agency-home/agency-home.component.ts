import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-agency-home',
  templateUrl: './agency-home.component.html',
  styleUrl: './agency-home.component.scss'
})
export class AgencyHomeComponent {

  selectedRowIndex: number = -1;
     showForm: boolean = false;
     selectedAgency: any;
     isAddingAgency: boolean = false;
     isEditingAgency: boolean = false;
     isEditable: boolean = false;
     constructor(private dialog: MatDialog, private _formBuilder: FormBuilder) {}
     onAgencySelected(Agency: any) {
       this.selectedAgency = Agency;
       this.isEditingAgency = true;
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
       this.isAddingAgency = true;
       this.isEditable = true;
       //this.selectedAgency = null;
   
     }
   
     editAgency() {
       console.log('Agency to modify :', this.selectedAgency);
       this.isEditingAgency = true;
       this.showForm = true;
       this.isEditable = true;
       // Si l'édition est souhaitée dès la modification, décommentez cette ligne
       if (this.selectedAgency) {
         this.selectedAgency.emit(this.selectedAgency);
   
     }
    }
     cancelForm() {
       this.showForm = false;
       this.isAddingAgency = false;
       this.isEditingAgency = false;
       this.selectedAgency = null;
       this.isEditable = false;
       this.options.reset();
       this.selectedRowIndex = -1; // Assurez-vous de réinitialiser l'état d'édition
     }
   
   }
 

