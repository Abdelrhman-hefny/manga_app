import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manhwa-card',
  standalone: true,
  imports: [NgFor, NgForOf,NgIf,RouterLink],
  templateUrl: './manhwa-card.component.html',
  styleUrls: ['./manhwa-card.component.scss'],
})
export class ManhwaCardComponent {
  manhwas = [
    {
      title: 'My Husband Who Hates Me Has Lost Hi...',
      genre: 'Romance',
      chapters: [
        { number: 66, date: '08 Mar 2025', status: 'New' },
        { number: 65, date: '25 Feb 2025' },
        { number: 64, date: '20 Feb 2025' },
      ],
      cover: 'https://picsum.photos/200/300',
    },
    {
      title: 'The Villainess Reverses the Hourglass',
      genre: 'Fantasy',
      chapters: [
        { number: 45, date: '10 Mar 2025', status: 'New' },
        { number: 44, date: '28 Feb 2025' },
      ],
      cover: 'https://picsum.photos/300/300',
    },
    {
      title: 'Under the Oak Tree',
      genre: 'Drama',
      chapters: [
        { number: 32, date: '05 Mar 2025' },
        { number: 31, date: '20 Feb 2025' },
      ],
      cover: 'https://picsum.photos/250/300',
    },
    {
      title: 'Under the Oak Tree',
      genre: 'Drama',
      chapters: [
        { number: 32, date: '05 Mar 2025' },
        { number: 31, date: '20 Feb 2025' },
      ],
      cover: 'https://picsum.photos/400',
    },
    {
      title: 'Under the Oak Tree',
      genre: 'Drama',
      chapters: [
        { number: 32, date: '05 Mar 2025' },
        { number: 31, date: '20 Feb 2025' },
      ],
      cover: 'https://picsum.photos/300',
    },
    {
      title: 'Under the Oak Tree',
      genre: 'Drama',
      chapters: [
        { number: 32, date: '05 Mar 2025' },
        { number: 31, date: '20 Feb 2025' },
      ],
      cover: 'https://picsum.photos/200',
    },
  ];
}
