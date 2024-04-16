import { NumberSymbol } from "@angular/common";
import { Agence } from "./agence";
import { Role } from "./role";

export interface utilisateur{
    
        id: number;
        agence: Agence;
        profil: Role;
        id_ss_profil: SsProfil;
        id_reseau:Number;
        idLangueAffichage: LangueAffichage;
        idLangueFormulaire: LangueFormulaire;
        nom: string;
        prenom: string;
        login: string;
        password: string;
        email: string;
        pwdhash: string;
        actif: boolean;
      }

      // a changer et ajouter le model
export interface SsProfil{}
export interface LangueAffichage{}
export interface LangueFormulaire{}