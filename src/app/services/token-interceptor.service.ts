
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';






@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupérer le token d'accès depuis le service AuthService
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    console.log('acec',accessToken)
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && refreshToken) {
          return this.authService.refreshAccessToken().pipe(
            switchMap((response: any) => {
              const newAccessToken = response.access_token;
              const newRefreshToken = response.refresh_token;

              localStorage.setItem('accessToken', newAccessToken);
              localStorage.setItem('refreshToken', newRefreshToken);

              const updatedReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${newAccessToken}`
                }
              });

             
              return next.handle(updatedReq);
            }),
            catchError(() => {
              this.authService.logout();
              return throwError(error);
            })
          );
        }

        return throwError(error);
      })
    );
  }
}





   
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
