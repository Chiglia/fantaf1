import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }
  @Output() routeChanged: EventEmitter<void> = new EventEmitter<void>();
  async ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeChanged.emit();
      }
    });
    // this.authService.isLoggedIn().subscribe((loggedIn: boolean) => {
    //   this.isLoggedIn = loggedIn;
    // });
  }
}
