import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from '../../../layout/services/app.layout.service';

@Component({
  selector: 'app-main-topbar',
  templateUrl: './main-topbar.component.html',
  styleUrls: ['./main-topbar.component.scss']
})
export class MainTopbarComponent implements OnInit {
  @ViewChild('menubutton') menuButton!: ElementRef;

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
  }

}
