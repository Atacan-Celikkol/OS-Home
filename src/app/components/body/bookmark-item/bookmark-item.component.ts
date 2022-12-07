import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Bookmark } from 'src/app/core/models/bookmark';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.scss']
})
export class BookmarkItemComponent {
  @Input() bookmark!: Bookmark;
}
