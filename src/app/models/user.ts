import { NumberSymbol } from "@angular/common";
import { Agence } from "./agence";
import { Role } from "./role";

export class User{
    
        /*id!: number ;
        agence!: Agence;
        Role!: Role;
       ss_profil!: SsProfil;
        id_reseau!:Number;
        idLangueFormulaire!: LangueFormulaire;
        nom!: string;
        prenom!: string;
        login!: string;
        password!: string;
        email!: string;
        pwdhash!: string;*/
        username!:String;
        password!: String;
        role !:Role;
        agence !:Agence;
        Ss_profil !:SsProfil ;
        actif!: boolean;
        firstname!:string;
        lastname!:String
        profile: any;
        accountEnabled: any;
  id!: number;
  
  
  


        public User(){}

       
        
      }
     

      // a changer et ajouter le model
export interface SsProfil{}
export interface LangueFormulaire{} 



