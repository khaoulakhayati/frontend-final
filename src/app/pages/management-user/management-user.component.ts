import { Component } from '@angular/core';

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrl: './management-user.component.scss'
})
export class ManagementUserComponent {
  showCreeuser: boolean = false;

  showCreeuserForm() {
    this.showCreeuser = true;
  }

  cancelCreation() {
    this.showCreeuser = false;
  }

}

