import { Component } from '@angular/core';
import { NgFor, NgForOf } from '@angular/common';
import { ManhwaCardComponent } from '../manhwa-card/manhwa-card.component';

@Component({
  selector: 'app-last-update',
  standalone: true,
  imports: [ManhwaCardComponent, NgForOf, NgFor],
  templateUrl: './last-update.component.html',
  styleUrl: './last-update.component.scss',
})
export class LastUpdateComponent {
  recentlyAdded = [
    {
      rank: 1,
      title: 'I Thought...',
      genre: 'Action',
      image: 'https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp',
    },
    {
      rank: 2,
      title: 'Revenge Hero',
      genre: 'Fantasy',
      image: 'https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp',
    },
    {
      rank: 3,
      title: 'Legend of Swords',
      genre: 'Adventure',
      image: 'https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp',
    },
    {
      rank: 4,
      title: 'Dark Mage',
      genre: 'Magic',
      image: 'https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp',
    },
    {
      rank: 5,
      title: 'Rise of the King',
      genre: 'Drama',
      image: 'https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp',
    },
  ];
}
