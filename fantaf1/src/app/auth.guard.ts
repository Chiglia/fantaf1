// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Se l'utente è loggato, consente l'accesso alla rotta
    } else {
      this.router.navigate(['/login']); // Se l'utente non è loggato, reindirizza alla pagina di login
      return false;
    }
  }
}

