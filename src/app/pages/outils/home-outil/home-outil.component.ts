import { Component } from '@angular/core';

@Component({
  selector: 'app-home-outil',
  templateUrl: './home-outil.component.html',
  styleUrl: './home-outil.component.scss'
})
export class HomeOutilComponent {
  showForm: boolean = false;
  showCreeoutil: boolean = false;
  isAddingOutil: boolean = false;
  showCreeoutilForm() {
    this.showCreeoutil = true;
  }

  cancelCreation() {
    this.showCreeoutil = false;
  }

}
