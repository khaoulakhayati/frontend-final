// ssprofil.service.ts 
import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import { SSProfil } from '../models/ssprofil';
   @Injectable({ providedIn: 'root' }) 
   export class SSProfilService { private apiUrl = 'http://localhost:8080/api/v1/ssprofils'; // Update the URL as needed

    constructor(private http: HttpClient) {}
     
    
    getSSProfils(): Observable<SSProfil[]> 
     { return this.http.get<SSProfil[]>(this.apiUrl); }
      
     
     getSSProfilById(id: number): Observable<SSProfil>
     { return this.http.get<SSProfil>(`${this.apiUrl}/${id}`); }
        
       
     createSSProfil(ssProfil: SSProfil): Observable<SSProfil>
      { return this.http.post<SSProfil>(this.apiUrl, ssProfil); }
        
      
     updateSSProfil(id: number, ssProfil: SSProfil): Observable<SSProfil>
       { return this.http.put<SSProfil>(`${this.apiUrl}/${id}`, ssProfil); }
          
          
       deleteSSProfil(id: number): Observable<void> 
         { return this.http.delete<void>(`${this.apiUrl}/${id}`); } }