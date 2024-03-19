import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthenticationRequest } from '../models/AuthenticationRequest';
import { RegisterRequest } from '../models/RegisterRequest';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl + 'auth';

  private refreshTokenUrl = '${this.baseUrl}/refresh-token';
  constructor(private http: HttpClient  ,private jwtHelper: JwtHelperService) { }

  authenticate(request: AuthenticationRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/authenticate`, request);
  }

  register(request: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, request);
  }

  refreshAccessToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refresh_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${refreshToken}`
    });

    return this.http.post(this.refreshTokenUrl,  { headers });
  }


  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

  isAuthenticated(): boolean {
    const bearerToken = localStorage.getItem('access_token');

   
    return !!bearerToken; 
  }

  logout() {
    const url = '${this.baseUrl}/logout';
    return this.http.post(url, null);
  }


  decodeToken(token: string): any {
    return this.jwtHelper.decodeToken(token);
  }


  getUserIdFromToken(): number | null {
    const token = localStorage.getItem('access_token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.id;
    }
    return null;
  }


  getUserBylogin(login: string): Observable<RegisterRequest> {

    const authToken = localStorage.getItem('access_token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });

    const url = `http://localhost:8090/api/v1/auth/loginn/${login}`;
    return this.http.get<RegisterRequest>(url, { 'headers': headers });
  }


  getUserRole(): string | null {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      return user.profile; 
    }
    return null; 

  }
}