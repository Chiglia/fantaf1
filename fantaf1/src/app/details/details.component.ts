import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PilotiService } from '../piloti.service';
import { StatsPiloti } from '../stats-piloti';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  statsPiloti: StatsPiloti | undefined;

  constructor(
    private route: ActivatedRoute,
    private pilotiService: PilotiService,
    private authService: AuthService
  ) {
    const statsPilotiId = Number(this.route.snapshot.params['id']);
    this.statsPiloti = this.pilotiService.getPilotaById(statsPilotiId);
  }

  scegliPilota(pilotaId: number, pilotaCosto: number): void {
    this.authService.getuserData().subscribe(userData => {
      if (userData && userData.monete >= pilotaCosto) {
        this.authService.aggiungiPilotaCompere(pilotaId,pilotaCosto).subscribe(
          () => {
            console.log('Pilota aggiunto con successo alla sezione compere.');
          },
          error => {
            console.error('Errore durante l\'aggiunta del pilota alla sezione compere:', error);
          }
        );
      } else {
        console.log('Non hai abbastanza monete per scegliere questo pilota.');
      }
    });
  }
}
