import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserData } from '../user-data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private cookieService: CookieService, public authService: AuthService, private router: Router, private appComponent: AppComponent) {
    this.appComponent.routeChanged.subscribe(() => {
      this.isSideMenuOpen = false;
    });
  }
  isSideMenuOpen: boolean = false;
  userData: UserData | undefined;
  @Input() isLoggedIn: boolean = false;

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
        this.isLoggedIn = false; // Impostiamo isLoggedIn su false dopo il logout
      },
      error => {
        console.error('Errore durante il logout:', error);
      }
    );
  }

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((loggedIn: boolean) => {
      if (loggedIn) {
        this.authService.getuserData().subscribe(userData => {
          this.userData = userData;          
        });
      }
    });
    this.authService.checkLoggedInStatus(); // Chiamiamo checkLoggedInStatus() solo all'inizio
    this.authService.isLoggedIn().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }
}
