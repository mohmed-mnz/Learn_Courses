import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  count:number=0;
  constructor() { }

  updateCount(comingCount:number) {
    this.count=comingCount;
  }
  getCount() {
    return this.count;
  }
}
