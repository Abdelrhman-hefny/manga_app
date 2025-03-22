import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-info',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './manga-info.component.html',
  styleUrls: ['./manga-info.component.scss'],
})
export class MangaInfoComponent implements OnInit {
  manga = {
    title: 'Hold Her Tighter So She Wouldn’t Run Away',
    status: 'ongoing',
    type: 'manhwa',
    lastUpdated: '4 days ago',
    genres: ['Romance', 'Drama'],
    description:
      'Theo, who was forced into an arranged marriage due to the pressure of the Empire.\nHowever, he fell in love with his wife, Yuelina, at first sight!\nBut Yuelina is destined to be sacrificed for the Empire...\nCan Theo protect his wife, who is meant to be a sacrifice, and live a long, happy life with her?',
    coverImage: 'https://picsum.photos/200', // Using the placeholder as requested
    firstChapterUrl: '/chapter/63089f46876-6308a9092bd/',
    latestChapterUrl: '/chapter/63089f46876-630963bd938/',
    seriesUid: '63089f46876',
  };

  isInLibrary: boolean = false;

  ngOnInit() {
    // Check if the manga is in the library (using localStorage for persistence)
    const library = JSON.parse(localStorage.getItem('library') || '[]');
    this.isInLibrary = !!library[this.manga.seriesUid];
  }

  toggleLibrary() {
    const library = JSON.parse(localStorage.getItem('library') || '[]');
    if (this.isInLibrary) {
      delete library[this.manga.seriesUid];
    } else {
      library[this.manga.seriesUid] = true;
    }
    localStorage.setItem('library', JSON.stringify(library));
    this.isInLibrary = !this.isInLibrary;
  }
}
