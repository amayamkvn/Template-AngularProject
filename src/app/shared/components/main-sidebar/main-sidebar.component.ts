import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
  }

}
