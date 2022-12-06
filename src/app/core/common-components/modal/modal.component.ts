import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() Icon: string | undefined;
  @Input() Title: string | undefined;
  @Input() Display = true;
  @Output() DisplayChange = new EventEmitter<boolean>();

  closeModal() {
    this.DisplayChange.emit(!this.Display);
  }
}
