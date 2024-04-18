
import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrl: './agency-form.component.scss'
})
export class AgencyFormComponent {


    @ViewChild('transportDialogTemplate')
    transportDialogTemplate!: TemplateRef<any>;
    @Input() isAddingAgency: boolean = false;
    @Input() isEditingAgency: boolean = false;
    @Input() selectedAgency!: any;
    formData: any = {}; // Stockage des données du formulaire
    @Input() isEditable: boolean = false; 
    showTable: boolean = false; 
    isFieldFocused: boolean = false;
    constructor(private dialog: MatDialog) {
      console.log('showForm initially:', this.showForm);
    }
  
    showForm: boolean = false;
    ngOnChanges(changes: SimpleChanges): void {
      if (changes['selectedAgency'] && this.selectedAgency) {
        this.formData = { ...this.selectedAgency };
      } else {
        this.formData = {};
      }
    }
  
    editAgency() {
      console.log('Agency to modify:', this.selectedAgency);
      this.isEditingAgency = true;
      this.showForm = true
    }
    enableEdit() {
      this.isEditable = true;
    }
    
    saveChanges() {
      console.log('Changes saved :', this.formData);
      this.isEditable = false;
    }
    searchTool() {
      
      this.showTable = true;
    }
  
    onFocus() {
      this.isFieldFocused = true;
    }
    onBlur() {
      this.isFieldFocused = false;
    }
  
    hasData(fieldModel: any): boolean {
      return fieldModel && fieldModel !== '';
    }
    
  }
  
  
  
