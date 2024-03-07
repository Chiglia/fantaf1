import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { General } from '../general';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit{
  @Input() general!: General;
  userEmail: string | undefined;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getEmail()
      .subscribe(
        email => {
          this.userEmail = email;
          console.log(email);
        },
        error => {
          console.error('Errore durante il recupero dell\'email:', error);
        }
      );
  }
}

