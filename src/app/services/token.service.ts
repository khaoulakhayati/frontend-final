import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private jwtHelper: JwtHelperService) { }

    /*

gérer les roles


  */

set accessToken(accessToken: string) {
  localStorage.setItem('access_token',accessToken);}

get accessToken () {
  return localStorage.getItem('access_token') as string;
}

isTokenValid() {
  const token = this.accessToken;
  if (!token) {
    return false;
  }
  // decode the token
  const jwtHelper = new JwtHelperService();
  // check expiry date
  const isTokenExpired = jwtHelper.isTokenExpired(token);
  if (isTokenExpired) {
    localStorage.clear();
    return false;
  }
  return true;
}

isTokenNotValid() {
  return !this.isTokenValid();
}

decodeToken(token: string): any {
  return this.jwtHelper.decodeToken(token);
}

get userRoles(): string[] {
  const token = this.accessToken;
  if (token) {
    
    const decodedToken = this.jwtHelper.decodeToken(token);
    console.log(decodedToken.authorities); 
    return decodedToken.authorities;
  }
  return [];
}

isAdmin() {
  const roles = this.userRoles;
  console.log(roles)
  if (roles && roles.length > 0) {
    return roles.includes('ADMIN');
  }
  return false;
}


isNotAdmin() {
  return !this.isAdmin();
}

isSuperviseur() {
  const roles = this.userRoles;
    console.log(roles)
  if (roles && roles.length > 0) {
    return roles.includes('SUPERVISEUR');
  }
  return false;
}


isNotSuperviseur() {
  return !this.isSuperviseur();
}
}

