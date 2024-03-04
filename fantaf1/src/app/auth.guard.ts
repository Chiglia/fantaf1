// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Consente l'accesso alla route se l'utente è autenticato
    } else {
      this.router.navigate(['/login']); // Reindirizza l'utente alla pagina di login se non è autenticato
      return false; // Blocca l'accesso alla route
    }
  }
}
