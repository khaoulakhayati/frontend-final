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
  private accessToken: string | undefined;
  private refreshToken: string | undefined;
  private refreshTokenUrl = '${this.baseUrl}/refresh-token';
  constructor(private http: HttpClient  ,private jwtHelper: JwtHelperService) { }

  authenticate(request: AuthenticationRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/authenticate`, request, { withCredentials: true });
  }

  register(request: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, request);
  }

  refreshAccessToken(): Observable<any> {
    return this.http.post<any>(this.refreshTokenUrl, null, { withCredentials: true });
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`, { withCredentials: true });
  }

  isAuthenticated(): boolean {
    const bearerToken = localStorage.getItem('access_token');

   
    return !!bearerToken; 
  }
  setTokens(accessToken: string, refreshToken: string): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  getAccessToken(): string | undefined {
    return this.accessToken;
  }

  getRefreshToken(): string | undefined {
    return this.refreshToken;
  }
  logout() {
    this.accessToken = undefined;
    this.refreshToken = undefined;
    // Supprimer les tokens du stockage de session
    sessionStorage.removeItem('user_info');
    sessionStorage.removeItem('user');
    // Supprimer les cookies
    document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    const url = `${this.baseUrl}/logout`;
    return this.http.post(url, null, { withCredentials: true });
  }

  decodeToken(token: string): any {
    return this.jwtHelper.decodeToken(token);
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


  getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }
/*

 


  getUserIdFromToken(): number | null {
    const token = localStorage.getItem('access_token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.id;
    }
    return null;
  }






/*
  getUserRole(): string | null {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      return user.profile; 
    }
    return null; 

  }
  */
}