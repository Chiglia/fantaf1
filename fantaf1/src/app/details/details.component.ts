import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PilotiService } from '../piloti.service';
import { StatsPiloti } from '../stats-piloti';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  pilotiService = inject(PilotiService);
  statsPiloti: StatsPiloti | undefined;

  constructor() {
    const statsPilotiId = Number(this.route.snapshot.params['id']);
    this.statsPiloti = this.pilotiService.getPilotaById(statsPilotiId);
  }
}
