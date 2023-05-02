import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
    providedIn: 'root',
})

export class LayoutService {

    config = {
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
    };

    state = {
        overlayMenuActive: false,
        staticMenuDesktopInactive: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    };
    private overlayOpen = new Subject<any>();
    overlayOpen$ = this.overlayOpen.asObservable();


    onMenuToggle() {
        if (this.isOverlay()) {
            this.state.overlayMenuActive = !this.state.overlayMenuActive;
            if (this.state.overlayMenuActive) {
                this.overlayOpen.next(null);
            }
        }


        if (this.isDesktop()) {
            this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
        }else {
            this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
            if (this.state.staticMenuMobileActive) {
                this.overlayOpen.next(null);
            }
        }

    }


    isOverlay() {
        return this.config.menuMode === 'overlay';
    }

    isDesktop() {
        return window.innerWidth > 991;
    }



}