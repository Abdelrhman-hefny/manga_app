import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss'],
  standalone: true,
  imports: [NgClass, NgFor, NgIf, RouterLink],
})
export class ChapterListComponent {
  chapters = [
    {
      number: 15,
      url: '/chapter/63089f46876-630963bd938/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 100,
    },
    {
      number: 14,
      url: '/chapter/63089f46876-6309518fe0f/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 100,
    },
    {
      number: 12,
      url: '/chapter/63089f46876-63095036b86/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 100,
    },
    {
      number: 11,
      url: '/chapter/63089f46876-63094f5f6a6/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 100,
    },
    {
      number: 10,
      url: '/chapter/63089f46876-63094e21fc0/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 100,
    },
    {
      number: 9,
      url: '/chapter/63089f46876-6309606bf7e/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 100,
    },
    {
      number: 8,
      url: '/chapter/63089f46876-63092eed49a/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 1,
    },
    {
      number: 7,
      url: '/chapter/63089f46876-63091df6583/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 1,
    },
    {
      number: 6,
      url: '/chapter/63089f46876-6308f179286/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 1,
    },
    {
      number: 5,
      url: '/chapter/63089f46876-6308f716a82/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 1,
    },
    {
      number: 4,
      url: '/chapter/63089f46876-6308d90e2c4/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 1,
    },
    {
      number: 3,
      url: '/chapter/63089f46876-6308b093b28/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 1,
    },
    {
      number: 2,
      url: '/chapter/63089f46876-6308b590e5b/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 1,
    },
    {
      number: 1,
      url: '/chapter/63089f46876-6308a9092bd/',
      image: 'https://picsum.photos/200',
      timestamp: '4 days ago',
      coins: 1,
    },
  ];

  isExpanded: boolean = false;
  isSortedAsc: boolean = false;

  toggleSort() {
    this.isSortedAsc = !this.isSortedAsc;
    this.chapters.sort((a, b) =>
      this.isSortedAsc ? a.number - b.number : b.number - a.number
    );
  }

  toggleExpand() {
    this.isExpanded = true;
  }
}
