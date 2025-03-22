import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    TitleCasePipe
  ]
})
export class SidebarComponent {
  topManga = [
    {
      rank: 1,
      title: 'Death Is The Only Ending For The Villainess',
      image: 'https://picsum.photos/200',
      url: '/series/c5db4cb614d/',
      genres: ['Drama', 'Fantasy', 'Josei'],
      tags: ['manhwa', 'english']
    },
    {
      rank: 2,
      title: 'How to Get My Husband on My Side',
      image: 'https://picsum.photos/200',
      url: '/series/06137d4443a/',
      genres: [],
      tags: ['manhwa', 'english']
    },
    {
      rank: 3,
      title: 'My In-Laws Are Obsessed With Me',
      image: 'https://picsum.photos/200',
      url: '/series/11c0af9f664/',
      genres: ['Drama', 'Shoujo'],
      tags: ['manhwa', 'english']
    },
    {
      rank: 4,
      title: 'I Thought It’s a Common Possession',
      image: 'https://picsum.photos/200',
      url: '/series/be5680816d2/',
      genres: ['Drama', 'Romance', 'Fantasy'],
      tags: ['manhwa', 'english']
    },
    {
      rank: 5,
      title: 'Princess Who Hides Her Fandom',
      image: 'https://picsum.photos/200',
      url: '/series/de964ef726c/',
      genres: ['Shoujo', 'Romance', 'Comedy'],
      tags: ['manhwa']
    },
    {
      rank: 6,
      title: 'Just Twilight',
      image: 'https://picsum.photos/200',
      url: '/series/8b8a72ac1bf/',
      genres: [],
      tags: ['manhwa']
    },
    {
      rank: 7,
      title: 'A Fortune Telling Princess',
      image: 'https://picsum.photos/200',
      url: '/series/a68037cb299/',
      genres: ['Shoujo', 'Romance', 'Fantasy'],
      tags: ['manhwa']
    },
    {
      rank: 8,
      title: 'Tears on a Withered Flower',
      image: 'https://picsum.photos/200',
      url: '/series/6288a88760a/',
      genres: ['Drama', 'Romance'],
      tags: ['manhwa', 'english']
    }
  ];

  constructor() {
    console.log('Top Manga Items:', this.topManga.length);
  }
}