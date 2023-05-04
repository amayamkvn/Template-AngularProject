import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../../layout/services/app.layout.service';

@Component({
  selector: 'app-main-topbar',
  templateUrl: './main-topbar.component.html',
  styleUrls: ['./main-topbar.component.scss']
})
export class MainTopbarComponent implements OnInit {
  @ViewChild('menubutton') menuButton!: ElementRef;

  public accountMenuItems: MenuItem[] = [
    {
      label: 'Configuración',
      icon: 'pi pi-cog',
      routerLink: '/dashboard/my-account/configuration',
    },
    {
      label: 'Seguridad',
      icon: 'pi pi-lock',
      routerLink: '/dashboard/my-account/security',
    },
  ];
  

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
  }

}
