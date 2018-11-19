import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  detail: any;
  mainImage;
  row1 = [];
  row2 = [];

  constructor(private portfolio$: PortfolioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.detail = this.portfolio$.getPortfolioById(p['params']['id']);
      console.log(this.detail);
    });

    let randomImages = this.generateFiveNumbers();
    randomImages = randomImages.map(val => '../../assets/' + this.detail.imageDir + '/' + val + '.png');
    this.mainImage = randomImages[0];
    randomImages = randomImages.slice(1);
    randomImages.forEach((value, i) => {
      if (i % 2 === 0) {
        this.row1.push(value);
      } else {
        this.row2.push(value);
      }
    });
    console.log(this.row1, this.row2);
  }

  generateFiveNumbers() {
    const arr = [];
    while (arr.length < 5) {
        const r = Math.floor(Math.random() * this.detail.totalImages) + 1;
        if (arr.indexOf(r) === -1) {
          arr.push(r);
        }
    }
    return arr;
  }

}
