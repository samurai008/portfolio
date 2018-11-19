import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  index;
  listOfWork;
  cId ; cImage ; cTitle ; cStack;
  constructor(private portfolio$: PortfolioService) {
    this.index = this.portfolio$.index;
  }

  ngOnInit() {
    this.listOfWork = this.portfolio$.getAllPortfolio();
    this.cId = this.listOfWork[this.index].id;
    this.cImage = this.listOfWork[this.index].image;
    this.cTitle = this.listOfWork[this.index].title;
    this.cStack = this.listOfWork[this.index].stack;
  }

  goRight(index) {
    if (index < this.listOfWork.length - 1) {
      this.index = index + 1;
      this.portfolio$.index = this.index;
      this.setWork(this.listOfWork[this.index]);
    }
  }

  goLeft(index) {
    if (index > 0) {
      this.index = index - 1;
      this.setWork(this.listOfWork[this.index]);
    }
  }

  setWork(work) {
    this.cId = work.id;
    this.cImage = work.image;
    this.cTitle = work.title;
    this.cStack = work.stack;
  }

}
