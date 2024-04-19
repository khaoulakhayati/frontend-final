// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface AuthenticationRequest { username: string; password: string; }
export interface RegistrationRequest extends AuthenticationRequest { firstname: string; lastname: string; }
export interface AuthenticationResponse { accessToken: string; refreshToken: string; }
@Injectable({ providedIn: 'root' })


export class AuthService {
  private authUrl = 'http://localhost:8080/api/v1/auth';


  constructor(private http: HttpClient) {

  }




  login(data: AuthenticationRequest): Observable<AuthenticationResponse> {

    return this.http.post<AuthenticationResponse>(`${this.authUrl}/authenticate`, data)

      .pipe(tap(res => {

        localStorage.setItem('currentUser', JSON.stringify(res));

        this.currentUserSubject.next(res);

      }));

  }
  /*
  register(data: RegistrationRequest): Observable<AuthenticationResponse> {

    return this.http.post<AuthenticationResponse>

  
      (`${this.authUrl}/register`, data).pipe(tap(res => {


        localStorage.setItem('currentUser', JSON.stringify(res));

        this.currentUserSubject.next(res);
      }));


  }
   refreshToken(): Observable<AuthenticationResponse> {
    const refreshToken = this.currentUserValue.refreshToken;

    return this.http.post<AuthenticationResponse>(`${this.authUrl}/refresh-token`, { refreshToken })
      .pipe(tap(res => {

        localStorage.setItem('currentUser', JSON.stringify(res));

        this.currentUserSubject.next(res);
      }));
  }
  logout(): void { localStorage.removeItem('currentUser'); this.currentUserSubject.next(null); }
*/
}