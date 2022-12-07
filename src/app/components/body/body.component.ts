import { Component } from '@angular/core';
import { BookmarkService } from 'src/app/core/services/bookmark.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  showCreateBookmarkModal = false;

  constructor(
    public bookmarkService: BookmarkService,
  ) { }
}
