import { utilisateur } from "./user";

export interface Agence {
    id: number;
    nom: string;
    utilisateurs: utilisateur[];
  }
  