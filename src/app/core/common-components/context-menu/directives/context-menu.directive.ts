import { Directive, HostListener, Input } from '@angular/core';
import { ContextMenuComponent } from '../context-menu.component';

@Directive({
  selector: '[osContextMenu]'
})
export class ContextMenuDirective {
  @Input() public osContextMenuSubject: any;
  @Input() public osContextMenu!: ContextMenuComponent;

  constructor() { }

  @HostListener('contextmenu', ['$event'])
  public onContextMenu(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    this.osContextMenu.subject = this.osContextMenuSubject;
    this.osContextMenu.x = `${e.x}px`;
    this.osContextMenu.y = `${e.y}px`;
    this.osContextMenu.Display = true;
  }
}
