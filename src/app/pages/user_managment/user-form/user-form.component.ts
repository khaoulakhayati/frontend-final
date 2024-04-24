import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges {
  @ViewChild('transportDialogTemplate')
  transportDialogTemplate!: TemplateRef<any>;
  @Input() isAddingUser: boolean = false;
  @Input() isEditingUser: boolean = false;
  @Input() selectedUser!: any;
  formData: any = {}; // Storage for form data
  @Input() isEditable: boolean = false; 
  showTable: boolean = false; 
  isFieldFocused: boolean = false;
  constructor(private dialog: MatDialog) {
    console.log('showForm initially:', this.showForm);
  }

  showForm: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUser'] && this.selectedUser) {
      this.formData = { ...this.selectedUser };
    } else {
      this.formData = {};
    }
  }

  editUser() {
    console.log('User to modify:', this.selectedUser);
    this.isEditingUser = true;
    this.showForm = true;
  }

  enableEdit() {
    this.isEditable = true;
  }

  saveChanges() {
    console.log('Changes saved:', this.formData);
    this.isEditingUser = false;
    this.isEditable = false;
    this.showForm = false;
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