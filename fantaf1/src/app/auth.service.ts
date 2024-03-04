import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fantaf1.chiglia.ovh';

  constructor(private http: HttpClient,private cookieService: CookieService, private router: Router) {}

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }
  isLoggedIn(): boolean {
    return this.cookieService.check('userID');
  }
  register(credentials: any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/register`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }

}
