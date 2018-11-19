import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navigationList = [
    { title: 'Home', active: true, path: '/home' },
    { title: 'Portfolio', active: false, path: '/portfolio' },
    { title: 'About', active: false, path: '/about' },
    { title: 'Contact', active: false, path: '/contact' }
  ];
  @ViewChild('tref', {read: ElementRef}) tref: ElementRef;
  title = 'Nilabjo Sanyal';
  showMenu = false;

  constructor() { }

  toggleMenu() {
    let _trefClassList = this.tref.nativeElement.firstChild.classList;
    console.log(_trefClassList);
    if (_trefClassList.contains('fa-bars')) {
      _trefClassList = _trefClassList.replace('fa-bars', 'fa-times');
    } else {
      _trefClassList = _trefClassList.replace('fa-times', 'fa-bars');
    }

    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
  }

}
