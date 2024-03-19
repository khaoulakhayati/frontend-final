import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-outil',
  templateUrl: './form-outil.component.html',
  styleUrl: './form-outil.component.scss'
})
export class FormOutilComponent {
  @Input() isAddingOutil: boolean = false;


  
}
