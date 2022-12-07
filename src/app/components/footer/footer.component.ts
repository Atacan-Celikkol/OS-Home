import { Component } from '@angular/core';
import { BookmarkService } from 'src/app/core/services/bookmark.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(
    public bookmarkService: BookmarkService,
  ) { }
}
