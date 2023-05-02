import { Component, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainSidebarComponent } from '../../../shared/components/main-sidebar/main-sidebar.component';
import { MainTopbarComponent } from '../../../shared/components/main-topbar/main-topbar.component';
import { LayoutService } from '../../services/app.layout.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnDestroy {
  
  overlayMenuOpenSubscription: Subscription;
  menuOutsideClickListener: any;

  @ViewChild(MainSidebarComponent) appSidebar!: MainSidebarComponent;
  @ViewChild(MainTopbarComponent) appTopbar!: MainTopbarComponent;



  constructor(public layoutService: LayoutService,
              public renderer: Renderer2
            ) {
              this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
                if (!this.menuOutsideClickListener) {
                  this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                    const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) 
                    || this.appSidebar.el.nativeElement.contains(event.target) 
                    || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) 
                    || this.appTopbar.menuButton.nativeElement.contains(event.target)
                    );
                    if (isOutsideClicked) {
                      this.hideMenu();
                    }
                  })
                }
              })
  }

  async ngOnInit() {
    //this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
   // await this._authService.getProfile();
  }

  hideMenu() { 
      this.layoutService.state.overlayMenuActive = false;
      this.layoutService.state.staticMenuMobileActive = false;
      this.layoutService.state.menuHoverActive = false;
      if (this.menuOutsideClickListener) {
          this.menuOutsideClickListener();
          this.menuOutsideClickListener = null;
      }
      this.unblockBodyScroll();
  }

  get containerClass() {
      return {
          'layout-static': this.layoutService.config.menuMode === 'static',
          'layout-overlay': this.layoutService.config.menuMode === 'overlay',

          'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
          'layout-overlay-active': this.layoutService.state.overlayMenuActive,
          'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      }
  }




  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
        this.overlayMenuOpenSubscription.unsubscribe();
    }

    if (this.menuOutsideClickListener) {
        this.menuOutsideClickListener();
    }
  }


  unblockBodyScroll(): void {
      if (document.body.classList) {
          document.body.classList.remove('blocked-scroll');
      }
      else {
          document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
              'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
  }

}
