import {Component} from '@angular/core';
import {ContextMenuItem} from 'src/app/core/common-components/context-menu/models/context-menu-item';
import {Bookmark} from 'src/app/core/models/bookmark';
import {BookmarkService} from 'src/app/core/services/bookmark.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  showCreateBookmarkModal = false;
  bookmarks = this.bookmarkService.Bookmarks;

  menuItems: ContextMenuItem[] = [
    {
      icon: 'fa fa-pen',
      name: 'Edit Bookmark',
      disabled: true,
      handler: (e: Bookmark) => {
        console.log(e)
      }
    },
    {
      icon: 'fa fa-trash',
      name: 'Delete Bookmark',
      handler: (e: Bookmark) => {
        if (confirm(`${e.name} bookmark will be deleted. Are you sure?`)) {
          this.bookmarkService.deleteBookmark(e);
        }
      }
    },
  ];

  constructor(
    public bookmarkService: BookmarkService,
  ) {

  }

  protected readonly BookmarkService = BookmarkService;
}
