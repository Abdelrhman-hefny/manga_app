import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('splide', { static: false }) splideRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  slides = [
    {
      image:
        'https://images.pexels.com/photos/2304204/pexels-photo-2304204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.pexels.com/photo/2304204/',
      alt: 'Ocean Waves',
    },
    {
      image:
        'https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.pexels.com/photo/18166547/',
      alt: 'Woman on Sea Shore',
    },
    {
      image:
        'https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-scenic-beach-landscape-with-rocky-island.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.pexels.com/photo/31120801/',
      alt: 'Scenic Beach',
    },
    {
      image:
        'https://images.pexels.com/photos/30358745/pexels-photo-30358745/free-photo-of-serene-boat-on-lake-ohrid-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.pexels.com/photo/30358745/',
      alt: 'Boat on Lake',
    },
    {
      image:
        'https://images.pexels.com/photos/31128803/pexels-photo-31128803/free-photo-of-bustling-tokyo-street-crossing-with-billboards.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.pexels.com/photo/31128803/',
      alt: 'Tokyo Street',
    },
    {
      image:
        'https://images.pexels.com/photos/6534391/pexels-photo-6534391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.pexels.com/photo/6534391/',
      alt: 'Mountain Landscape',
    },
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      new Splide(this.splideRef.nativeElement, {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        gap: '1%',
        pagination: true,
        arrows: true,
        drag: true,
        autoplay: true,
        interval: 1000,
        pauseOnHover: true,
        pauseOnFocus: false,
        breakpoints: {
          640: { perPage: 1 },
        },
      }).mount();
    }
  }
}
