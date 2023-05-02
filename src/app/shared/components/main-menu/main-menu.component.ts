import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/services/app.layout.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
    this.model.push({
      label: 'Menu Principal',
      items: [
        { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: [''] },
        {
          label: 'Personas',
          icon: 'pi pi-users',
          items: [
            {
              label: 'Registro',
              icon: 'pi pi-user-plus',
              routerLink: ['person/add'],
            },
            {
              label: 'Gestion',
              icon: 'pi pi-list',
              routerLink: ['person/manage'],
            },
          ],
        },
      ]
    })
  }

}
