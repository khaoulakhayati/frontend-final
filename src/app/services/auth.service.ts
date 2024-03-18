import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthenticationRequest } from '../models/AuthenticationRequest';
import { RegisterRequest } from '../models/RegisterRequest';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  authenticate(request: AuthenticationRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/authenticate`, request);
  }

  register(request: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, request);
  }

  refreshToken(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/refresh-token`, {});
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

}