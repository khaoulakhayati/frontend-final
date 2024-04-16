import { utilisateur } from "./user";

export interface Incident {
    id: number;
    nom: string;
    utilisateurs: utilisateur[];
  }
 