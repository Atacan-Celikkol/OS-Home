import { Component, Input } from '@angular/core';
import { Bookmark } from 'src/app/core/models/bookmark';

@Component({
  selector: 'app-footer-bookmark-item',
  templateUrl: './footer-bookmark-item.component.html',
  styleUrls: ['./footer-bookmark-item.component.scss']
})
export class FooterBookmarkItemComponent {
  @Input() bookmark!: Bookmark;

  ngOnInit() {
    console.log(this.bookmark);    
  }
}
