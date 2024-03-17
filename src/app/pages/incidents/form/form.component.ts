import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent  implements OnChanges {
  @ViewChild('transportDialogTemplate')
  transportDialogTemplate!: TemplateRef<any>;
  @Input() isAddingIncident: boolean = false;
  @Input() isEditingIncident: boolean = false;
  @Input() selectedIncident!: any;
  formData: any = {}; // Stockage des données du formulaire

  @Input() isEditable: boolean = false; 
  showTable: boolean = false; 

  isFieldFocused: boolean = false;

  constructor(private dialog: MatDialog) {
    console.log('showForm initially:', this.showForm);
  }


  showForm: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedIncident'] && this.selectedIncident) {
      this.formData = { ...this.selectedIncident };
    } else {
      this.formData = {};
    }
  }

  editIncident() {
    console.log('Incident à modifier :', this.selectedIncident);
    this.isEditingIncident = true;
    this.showForm = true
  }
  openTransportDialog(): void {
    const dialogRef = this.dialog.open(this.transportDialogTemplate);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Transport sélectionné :', result);
    });
  }


  enableEdit() {
    this.isEditable = true;
  }
  
  saveChanges() {
    console.log('Modifications sauvegardées :', this.formData);
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
