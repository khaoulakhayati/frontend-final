import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users'; // Remplacez par l'URL de votre API backend

  constructor(private http: HttpClient) { }
 
  // Récupérer la liste des utilisateurs
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );

  }

  // Récupérer un utilisateur par son ID
  getUserById(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`)   .pipe(
      catchError(this.handleError)
    );
  }
  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/current-user`)   .pipe(
      catchError(this.handleError)
    );}

  // Créer un nouvel utilisateur
  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Mettre à jour un utilisateur existant
  updateUser(user: any): Observable<any> {
    const url = `${this.apiUrl}/update${user.id}`;
    return this.http.put<any>(url, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Supprimer un utilisateur
  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/delete${userId}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Gestion des erreurs
  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.'); // Retourne un observable d'erreur avec un message par défaut
  }
}














