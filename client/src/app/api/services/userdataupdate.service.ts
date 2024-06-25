import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataUpdateService {
  private userDataSubject = new BehaviorSubject<any>(null);

  updateUserData(userData: any) {
    this.userDataSubject.next(userData);
  }

  getUpdatedUserData() {
    return this.userDataSubject.asObservable();
  }
}
