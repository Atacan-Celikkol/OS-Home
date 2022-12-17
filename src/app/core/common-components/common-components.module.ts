import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ContextMenuDirective } from './context-menu/directives/context-menu.directive';



@NgModule({
  declarations: [
    ModalComponent,
    ContextMenuComponent,
    ContextMenuDirective
  ],
  exports: [
    ModalComponent,
    ContextMenuComponent,
    ContextMenuDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CommonComponentsModule { }
