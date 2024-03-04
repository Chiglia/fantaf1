import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private cookieService: CookieService, public authService: AuthService, private router: Router) { }
  isSideMenuOpen: boolean = false;

  toggleSideMenu(): void {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }
  logout() {
    this.cookieService.delete('userID');
    
    this.authService.logout().subscribe(
      () => {
        console.log('Logout effettuato con successo');
        this.router.navigate(['/login']);
        this.isSideMenuOpen = !this.isSideMenuOpen;
      },
      error => {
        console.error('Errore durante il logout:', error);
      }
    );
  }
}
