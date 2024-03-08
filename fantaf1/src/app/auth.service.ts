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
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { this.checkLoggedInStatus(); }



  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  public checkLoggedInStatus(): void {
    this.http.get<{ isLoggedIn: boolean }>('/api/isLoggedIn').subscribe(response => {
      this.isLoggedInSubject.next(response.isLoggedIn);
    });
  }

  isLoggedIn(): Observable<boolean> {
    const isLoggedIn = this.isLoggedInSubject.getValue();
    if (isLoggedIn) {
      return of(true);
    }
    this.checkLoggedInStatus();
    return this.isLoggedInSubject.asObservable();
  }

  register(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }

  getuserData(): Observable<UserData> {
    if (this.userData) {
      return of(this.userData);
    }
    return this.http.get<UserData>('/api/user').pipe(
      tap(userData => {
        this.userData = userData;
      }),
      catchError(error => {
        console.error('Errore durante il recupero dei dati dell\'utente:', error);
        return of({ user_email: '', monete: 0, compere: '' });
      })
    );
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