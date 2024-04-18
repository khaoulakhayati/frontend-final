import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  private apiUrl = 'http://localhost:8080/agences'; // Remplacez par l'URL de votre API backend

  constructor(private http: HttpClient) { }

  // Récupérer la liste des agences
  getAllAgencies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Créer une nouvelle agence
  createAgency(agence: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, agence)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Mettre à jour une agence existante
  updateAgency(agence: any): Observable<any> {
    const url = `${this.apiUrl}/update${agence.id}`;
    return this.http.put<any>(url, agence)
      .pipe(
        catchError(this.handleError)
      );
  } 

  // Supprimer une agence
  deleteAgency(agenceId: number): Observable<any> {
    const url = `${this.apiUrl}/delete${agenceId}`;
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
