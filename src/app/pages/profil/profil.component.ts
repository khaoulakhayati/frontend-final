/*import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {


  user: any; 
  isLangueEnabled: boolean = false; 
  langList: Array<string> | undefined;
  success!: string;
  error!: string;
  constructor(private userService: UserService ,private translate: TranslateService) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.langList = this.translate.getLangs();
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        this.user = user;
        this.isLangueEnabled = true; 
      },
      error: (error) => {
        console.error("Erreur lors de la récupération de l'utilisateur actuel", error);
      }
    });
  }

  updateLangueUser() {
   
      this.userService.store(this.user).subscribe(() => {
      this.success = 'OK';
    }, () => {
      this.error = 'NOK';
    });
  }


}
*/