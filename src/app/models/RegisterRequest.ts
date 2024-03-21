import { Profil } from "./Profil";

export interface RegisterRequest {
    code?: string;
    nom?: string;
    prenom?: string;
    login?: string;
    password?: string;
    service?: string;
    telephone?: string;
    mobile?: string;
    fax?: string;
    email?: string;
    role?: Profil;
  }