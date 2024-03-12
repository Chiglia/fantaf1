import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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

  constructor(private authService: AuthService, private router: Router) {}
  
  onSubmit() {
    this.authService.login(this.formData)
      .subscribe(
        () => {
          console.log('Login effettuato con successo');
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Errore durante il login:', error);
        }
      );
  }
}
