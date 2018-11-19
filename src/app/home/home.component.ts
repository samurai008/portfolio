import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  skillList = [
    {
      title: 'Mobile Application Development',
      icons: ['fas fa-mobile-alt']
    },
    {
      title: 'Web Development',
      icons: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js']
    },
    {
      title: 'Wireframes',
      icons: ['fab fa-uikit']
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
