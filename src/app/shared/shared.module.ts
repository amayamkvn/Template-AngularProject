import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTopbarComponent } from './components/main-topbar/main-topbar.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainMenuitemComponent } from './components/main-menuitem/main-menuitem.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PrimengModule } from './primeng/primeng.module';


@NgModule({
  declarations: [
    MainTopbarComponent,
    MainSidebarComponent,
    MainFooterComponent,
    MainMenuComponent,
    MainMenuitemComponent
  ],
  imports: [
    CommonModule, 
    MenuModule, 
    ButtonModule, 
    InputTextModule,
    PrimengModule
  ],
  exports: [
    MainTopbarComponent,
    MainSidebarComponent,
    MainFooterComponent,
    MainMenuitemComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
