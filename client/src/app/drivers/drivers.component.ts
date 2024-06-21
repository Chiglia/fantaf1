import { Component, Input } from '@angular/core';
import { StatsPiloti } from '../stats-piloti';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent {
  @Input() statsPiloti!: StatsPiloti;

  cuoreVuoto = true;

  get cuoreIcon(): string {
    return this.cuoreVuoto ? 'far fa-heart' : 'fas fa-heart';
  }

  toggleCuore(): void {
    this.cuoreVuoto = !this.cuoreVuoto;
  }
}
