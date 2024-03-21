import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';


export const TokenInterceptorService : HttpInterceptorFn = (req, next) => {



  const accessToken =   sessionStorage.getItem('access_token');

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  // Log the request
  console.log('Request with Authorization Token:', authReq);

  // Pass the cloned request with the updated header to the next handler
  return next(authReq).pipe(
    catchError((err: any) => { // Remove caught: HttpResponse
      if (err instanceof HttpErrorResponse) {
        // Handle HTTP errors
        if (err.status === 401) {
          // Specific handling for unauthorized errors         
          console.error('Unauthorized request:', err);
          // You might trigger a re-authentication flow or redirect the user here
        } else {
          // Handle other HTTP error codes
          console.error('HTTP error:', err);
        }
      } else {
        // Handle non-HTTP errors
        console.error('An error occurred:', err);
      }

      // Re-throw the error to propagate it further
      return throwError(() => err); 
    })
  );;
};

/*

const accessToken = sessionStorage.getItem('access_token');
  const refreshToken = sessionStorage.getItem('refresh_token');

  // Cloner la requête et ajouter l'en-tête d'autorisation
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  // Journaliser la requête
  console.log('Requête avec jeton d'autorisation :', authReq);

  // Transmettre la requête clonée avec l'en-tête mis à jour au prochain gestionnaire
  return next(authReq).pipe(
    catchError((err: any) => { // Supprimer caught: HttpResponse
      if (err instanceof HttpErrorResponse) {
        // Gérer les erreurs HTTP
        if (err.status === 401) {
          // Traitement spécifique des erreurs non autorisées
          console.error('Requête non autorisée :', err);

          // Vous pouvez déclencher un flux de ré-authentification ou rediriger l'utilisateur ici

          if (refreshToken) {
            // Appeler votre point de terminaison API pour actualiser le jeton d'accès
            return refreshTokenCall(refreshToken)
              .pipe(
                // Gérer la réponse réussie du jeton d'actualisation
                map((newAccessToken) => {
                  // Mettre à jour le jeton d'accès dans le stockage (par exemple, sessionStorage)
                  sessionStorage.setItem('access_token', newAccessToken);

                  // Renvoyer la requête d'origine avec le nouveau jeton d'accès
                  const authReqWithNewToken = req.clone({
                    setHeaders: {
                      Authorization: `Bearer ${newAccessToken}`
                    }
                  });
                  return next(authReqWithNewToken);
                }),
                // Gérer l'erreur lors de l'appel du jeton d'actualisation
                catchError((refreshError) => {
                  console.error('Erreur lors de l'actualisation du jeton :', refreshError);
                  // Gérer l'échec du jeton d'actualisation (par exemple, déconnexion de l'utilisateur)
                  return throwError(() => refreshError);
                })
              );
          } else {
            // Gérer le scénario où le jeton d'actualisation est manquant (par exemple, déconnexion de l'utilisateur)
            console.error('Jeton d'actualisation manquant pour la ré-authentification');
            // Vous pouvez déclencher un flux de reconnexion ici
          }
        } else {
          // Gérer les autres codes d'erreur HTTP
          console.error('Erreur HTTP :', err);
        }
      } else {
        // Gérer les erreurs non HTTP
        console.error('Une erreur est survenue :', err);
      }

      // Rejeter l'erreur pour la propager
      return throwError(() => err);
    })
  );
};

*/
