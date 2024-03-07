import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  @Output() routeChanged: EventEmitter<void> = new EventEmitter<void>();
  async ngOnInit() {
    // if (await this.authService.isLoggedIn()) {
    //   this.router.navigate(['/dashboard']);
    // }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeChanged.emit();
      }
    });
  }
}
