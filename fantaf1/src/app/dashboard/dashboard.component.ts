import { Component, inject, OnInit } from '@angular/core';
import { PilotiService } from '../piloti.service';
import { StatsPiloti } from '../stats-piloti';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    statsPilotiList: StatsPiloti[] = [];
    pilotiService: PilotiService = inject(PilotiService);
  
    constructor() {
      this.statsPilotiList = this.pilotiService.getPiloti();
    }
    selectedTab: string = 'drivers'; // Inizialmente selezionato "Drivers"
    indicatorPosition: string = '0'; // Posizione iniziale dell'indicatore
    indicatorWidth: string = 'calc(100% / 2)'; // Larghezza iniziale dell'indicatore
    display = false;
    selectTab(tab: string): void {
      this.selectedTab = tab;
      if (tab === 'drivers') {
        this.indicatorPosition = '0'; // Posizione dell'indicatore per "Drivers"
        this.indicatorWidth = 'calc(100% / 2)'; // Larghezza dell'indicatore per "Drivers"
        this.display = !this.display;
      } else if (tab === 'general') {
        this.indicatorPosition = 'calc(100%)'; // Posizione dell'indicatore per "General"
        this.indicatorWidth = 'calc(100% / 2)'; // Larghezza dell'indicatore per "General"
        this.display = !this.display;
      }
    }
  
  
    //---------------------------------
    ngOnInit(): void {
    }
}
