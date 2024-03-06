import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fantaf1.chiglia.ovh';

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }
  isLoggedIn(): boolean {
    return this.cookieService.check('userID');
  }
  register(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }

  getUserProfile() {
    const token = this.cookieService.get('userID');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    const userData = this.http.get<any>(`${this.apiUrl}/api/user`, { headers });
    userData.subscribe(
      userData => {
        // Stampa l'ID e l'email dell'utente
        console.log('ID:', userData.id);
        console.log('Email:', userData.user_email);
      },
      error => {
        // Gestisci gli errori, se necessario
        console.error('Errore durante il recupero dei dati dell\'utente:', error);
      }
    );
    return userData;
  }
}
