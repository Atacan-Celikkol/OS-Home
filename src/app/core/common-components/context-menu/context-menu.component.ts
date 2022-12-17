import { Component, Input } from '@angular/core';
import { ContextMenuItem } from './models/context-menu-item';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent {
  public Display = false;
  public x = '';
  public y = '';

  public subject: any;

  @Input() menuItems!: ContextMenuItem[];

  constructor() {
  }

  public hide(e?: any) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    this.Display = false;
  }
}
