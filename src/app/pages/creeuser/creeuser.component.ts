import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-creeuser',
  templateUrl: './creeuser.component.html',
  styleUrl: './creeuser.component.scss'
})
export class CreeuserComponent implements OnInit {
  registerForm!: FormGroup;
  showForm: boolean = true;
  constructor(private formBuilder: FormBuilder, private authService: AuthService ,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      code: [''],
      email: [''],
      prenom: [''],
      nom: [''],
      password: ['', Validators.required],
      site: [''],
      profil: [''],
      langue: ['fr'],
      service: [''],
      telephone: [''],
      fax: ['']
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          alert('Utilisateur enregistré avec succès');
          this.registerForm.reset();
          window.location.reload();
        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement de l\'utilisateur : ', error);
          this.snackBar.open('Erreur lors de l\'enregistrement de l\'utilisateur', 'Fermer', { duration: 3000 });
        }
      );
    } else {
     
      this.markFormGroupTouched(this.registerForm);
      this.snackBar.open('Veuillez remplir correctement le formulaire', 'Fermer', { duration: 3000 });
    }
  }
  

   
    markFormGroupTouched(formGroup: FormGroup) {
      Object.values(formGroup.controls).forEach(control => {
        control.markAsTouched();
  
        if (control instanceof FormGroup) {
          this.markFormGroupTouched(control);
        }
      });
    }
}
