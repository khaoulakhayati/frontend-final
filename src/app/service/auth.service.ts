import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from '../models/AuthenticationRequest';
import { AuthenticationResponse } from '../models/AuthenticationResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/auth'; // URL de votre API
  private authTokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  authenticate(authRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/authenticate`, authRequest);
  }

  storeAuthToken(authToken: string): void {
    localStorage.setItem(this.authTokenKey, authToken);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }
}

  

