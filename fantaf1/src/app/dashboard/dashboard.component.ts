import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { General } from '../general';
import { PilotiService } from '../piloti.service';
import { StatsPiloti } from '../stats-piloti';
import { AuthService } from '../auth.service';
import { UserData } from '../user-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  statsPilotiList: StatsPiloti[] = [];
  generalList: General[] = [];
  selectedTab: string = 'drivers';
  indicatorPosition: string = '0';
  indicatorWidth: string = 'calc(100% / 2)';
  display = false;
  userData: UserData | undefined;

  constructor(private http: HttpClient, private pilotiService: PilotiService,private authService: AuthService) {}

  ngOnInit(): void {
    this.statsPilotiList = this.pilotiService.getPiloti();
    this.generalList = this.pilotiService.getGeneral();
    this.authService.getuserData().subscribe(userData => {
      this.userData = userData;
    });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    if (tab === 'drivers') {
      this.indicatorPosition = '0';
      this.indicatorWidth = 'calc(100% / 2)';
      this.display = false;
    } else if (tab === 'general') {
      this.indicatorPosition = 'calc(100%)'; 
      this.indicatorWidth = 'calc(100% / 2)';
      this.display = true;
    }
  }
}