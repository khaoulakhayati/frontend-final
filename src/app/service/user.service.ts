import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // URL de base pour les appels API vers le backend Spring Boot
  private apiUrl = 'http://localhost:8080/api/v1/users'; 
id:any
  user: any;
  constructor(private http: HttpClient) {}

  // Obtenir la liste de tous les utilisateurs
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/all`);
  }

  // Obtenir un utilisateur spécifique par son ID
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/current-user`);
  }
// Store function: Add or Update user based on presence of id

store(res: any): Observable<any> {
  this. user = JSON.parse(JSON.stringify(res));

  return of (null); 
}


  // Ajouter un nouvel utilisateur
  // Remarque: Votre contrôleur ne semble pas avoir un endpoint pour ajouter un nouvel utilisateur directement. Si besoin, il faut l'implémenter côté backend.

  // Mettre à jour un utilisateur
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Supprimer un utilisateur
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Changer le mot de passe d'un utilisateur
  changePassword(changePasswordRequest: ChangePasswordRequest): Observable<any> {
    return this.http.patch(`${this.apiUrl}`, changePasswordRequest, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}

