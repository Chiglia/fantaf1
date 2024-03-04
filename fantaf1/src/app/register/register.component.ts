import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formData = {
    email: '',
    password: '',
    confirmPassword:''
};

constructor(private authService: AuthService, private router: Router) {}

onSubmit() {
  this.authService.register(this.formData)
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