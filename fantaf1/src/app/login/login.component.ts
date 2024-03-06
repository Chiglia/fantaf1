import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) {}

  onSubmit() {
    this.authService.login(this.formData)
      .subscribe(
        (response) => {
          this.cookieService.set('userID', response.token);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Login error:', error);
        }
      );
  }
}
