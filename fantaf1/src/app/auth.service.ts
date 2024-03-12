import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserData } from './user-data';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'https://fantaf1.chiglia.ovh';
  private userData: UserData | null = null;

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        console.log(response.userData);
        if (response && response.userData) {
          this.userData = response.userData;
          localStorage.setItem('userData', JSON.stringify(this.userData));
        }
      })
    );
  }
  isLoggedIn(): Observable<boolean> {
    return this.http.get<{ isLoggedIn: boolean }>('/api/isLoggedIn').pipe(
      map(response => !!response.isLoggedIn),
      catchError(() => {
        return of(false);
      })
    );
  }

  register(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, credentials);
  }

  logout(): Observable<any> {
    localStorage.clear();
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }

  aggiungiPilotaCompere(pilotaId: number, pilotaCosto: number): Observable<any> {
    const user_email = this.userData?.user_email;
    if (!user_email) {
      throw new Error('User ID non disponibile.');
    }
    const payload = { user_email, pilotaId, pilotaCosto };
    return this.http.post<any>(`${this.apiUrl}/aggiungi-pilota-compere`, payload);
  }
}