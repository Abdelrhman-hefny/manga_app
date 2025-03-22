import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CommentsComponent } from '../../comments/comments.component';
import { ChapterListComponent } from '../../chapter-list/chapter-list.component';
import { MangaInfoComponent } from "../../manga-info/manga-info.component";

@Component({
  selector: 'app-manhwa-details',
  templateUrl: './manhwa-details.component.html',
  styleUrls: ['./manhwa-details.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    NgIf,
    TitleCasePipe,
    RouterLink,
    ChapterListComponent,
    CommentsComponent,
    SidebarComponent,
    MangaInfoComponent
]
})
export class ManhwaDetailsComponent implements OnInit {
  manga = {
    title: 'Hold Her Tighter So She Wouldn’t Run Away',
    status: 'ongoing',
    type: 'manhwa',
    lastUpdated: '4 days ago',
    genres: ['Romance', 'Drama'],
    description: 'Theo, who was forced into an arranged marriage due to the pressure of the Empire.\nHowever, he fell in love with his wife, Yuelina, at first sight!\nBut Yuelina is destined to be sacrificed for the Empire...\nCan Theo protect his wife, who is meant to be a sacrifice, and live a long, happy life with her?',
    coverImage: 'https://picsum.photos/200',
    firstChapterUrl: ['/chapter', '63089f46876', '6308a9092bd'], // Updated to use route array
    latestChapterUrl: ['/chapter', '63089f46876', '630963bd938'], // Updated to use route array
    seriesUid: '63089f46876'
  };

  isInLibrary: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const library = JSON.parse(localStorage.getItem('library') || '{}');
      this.isInLibrary = !!library[this.manga.seriesUid];
    } else {
      this.isInLibrary = false;
    }
  }

  toggleLibrary() {
    if (isPlatformBrowser(this.platformId)) {
      const library = JSON.parse(localStorage.getItem('library') || '{}');
      if (this.isInLibrary) {
        delete library[this.manga.seriesUid];
      } else {
        library[this.manga.seriesUid] = true;
      }
      localStorage.setItem('library', JSON.stringify(library));
      this.isInLibrary = !this.isInLibrary;
    }
  }
}