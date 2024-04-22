import { User } from "./user";

export interface Agence {
    id: number;
    nom: string;
    Users: User[];
  }
  