import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserData } from './user-data';
import { UserDataUpdateService } from './userdataupdate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fantaf1.chiglia.ovh';
  private userDataSubject: BehaviorSubject<UserData | null>;
  public userData$: Observable<UserData | null>;

  constructor(private http: HttpClient, private userDataUpdateService: UserDataUpdateService) {
    const userDataJSON = localStorage.getItem('userData');
    this.userDataSubject = new BehaviorSubject<UserData | null>(userDataJSON ? JSON.parse(userDataJSON) : null);
    this.userData$ = this.userDataSubject.asObservable();
  }

  get userData(): UserData | null {
    return this.userDataSubject.value;
  }

  private updateUserData(userData: UserData): void {
    this.userDataSubject.next(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
    this.userDataUpdateService.updateUserData(userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response && response.userData) {
          this.updateUserData(response.userData);
        }
      })
    );
  }

  register(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, credentials);
  }

  logout(): Observable<any> {
    localStorage.removeItem('userData');
    this.userDataSubject.next(null);
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }

  aggiungiPilotaCompere(pilotaId: number, pilotaCosto: number): Observable<any> {
    const userData = this.userData;
    if (!userData || !userData.user_email) {
      throw new Error('Dati utente non disponibili.');
    }
    const payload = { user_email: userData.user_email, pilotaId, pilotaCosto };
    return this.http.post<any>(`${this.apiUrl}/aggiungi-pilota-compere`, payload).pipe(
      tap(response => {
        if (response && response.userData) {
          this.updateUserData(response.userData);
        }
      })
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.userData$.pipe(
      map(userData => !!userData)
    );
  }
}