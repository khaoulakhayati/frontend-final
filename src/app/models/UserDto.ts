import { Profil } from "./Profil";

export interface UserDto {
  id? : number ;
    code?: string;
    nom?: string;
    prenom?: string;
    login?: string;
    service?: string;
    telephone?: string;
    mobile?: string;
    fax?: string;
    email?: string;
    profil?: Profil;
  }