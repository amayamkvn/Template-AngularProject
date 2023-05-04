import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

@NgModule({
    exports: [
        AvatarModule,
        OverlayPanelModule,
        DividerModule,
        ButtonModule
    ]
})

export class PrimengModule {}