import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class MenuService {
    public menuSource = new Subject<MenuChangeEvent>();
    public resetSource = new Subject();

    onMenuStateChange(event: MenuChangeEvent) {
        this.menuSource.next(event);
    }

    reset() {
        this.resetSource.next(true);
    }
}

export interface MenuChangeEvent {
    key: string;
    routeEvent?: boolean;
}