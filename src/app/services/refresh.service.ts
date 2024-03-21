import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  private refreshCreeuserComponent = new Subject<void>();

  refreshCreeuserComponent$ = this.refreshCreeuserComponent.asObservable();

  refresh() {
    this.refreshCreeuserComponent.next();
  }
}