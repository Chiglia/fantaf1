import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fantaf1.chiglia.ovh';

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  isLoggedIn(): Observable<boolean> {
    return this.http.get<{ isLoggedIn: boolean }>('/api/isLoggedIn').pipe(
      map(response => !!response.isLoggedIn), // Converte il valore in booleano
      catchError(() => {
        return of(false);
      })
    );
  }

  register(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }
  getEmail(): Observable<string> {
    return this.http.get<string>('/api/user');
  }
}
