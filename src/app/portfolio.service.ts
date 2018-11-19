import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  index = 0;

  listOfWork = [
    {
      id: 0,
      image: '../../assets/fooezm.png',
      title: 'Foodezm',
      stack: 'ionic, angular, sass, cordova',
      imageDir: 'foodezm',
      totalImages: 12
    },
    {
      id: 1,
      image: '../../assets/rtc.png',
      title: 'RTC',
      stack: 'ionic, angular, sass, cordova',
      imageDir: 'rtc',
      totalImages: 8
    }
  ];

  constructor() { }

  getAllPortfolio() {
    return this.listOfWork;
  }

  getPortfolioById(id) {
    return this.listOfWork[id];
  }
}
