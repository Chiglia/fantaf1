import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

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

  constructor(private authService: AuthService, private router: Router,private http: HttpClient) {}

  onSubmit() {
    this.authService.login(this.formData)
      .subscribe(
        () => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Login error:', error);
        }
      );
  }
}
