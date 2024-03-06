import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userProfile: any;
  constructor(private cookieService: CookieService, public authService: AuthService, private router: Router, private appComponent: AppComponent,private http: HttpClient) {
    this.appComponent.routeChanged.subscribe(() => {
      this.isSideMenuOpen = false;
    });
  }
  isSideMenuOpen: boolean = false;
  user?: User;
  
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
  ngOnInit(): void {
    this.getUserProfile();
  }
  getUserProfile() {
    this.authService.getUserProfile().subscribe(
      userProfile => {
        this.userProfile = userProfile;
      },
      error => {
        console.error('Errore durante il recupero del profilo utente:', error);
      }
    );
}
}
