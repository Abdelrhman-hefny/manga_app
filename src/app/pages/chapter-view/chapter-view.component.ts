import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-chapter-view',
  templateUrl: './chapter-view.component.html',
  styleUrls: ['./chapter-view.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    FormsModule
  ]
})
export class ChapterViewComponent implements OnInit, AfterViewInit {
  mangaId: string | null = null;
  chapterId: string | null = null;

  manga = {
    title: 'Hold Her Tighter So She Wouldn’t Run Away',
    seriesUid: '63089f46876'
  };

  chapter = {
    number: '01',
    chapterUid: '6308a9092bd',
    images: [
      { src: '/assets/ch9/01.jpg', uid: 'SBFTEm4vneE', count: 0 },
      { src: '/assets/ch9/02.jpg', uid: 'HrR2i5uRH6D', count: 1 },
      { src: '/assets/ch9/03.jpg', uid: 'A9sBbPmhzaP', count: 2 },
      { src: '/assets/ch9/04.jpg', uid: 'tPt9SHA1OIc', count: 3 },
      { src: '/assets/ch9/05.jpg', uid: 'O1aVObgwm1G', count: 4 },
      { src: '/assets/ch9/06.jpg', uid: 'vKlyYK--qQI', count: 5 },
      { src: '/assets/ch9/07.jpg', uid: 'qGciRq2de-6', count: 6 },
      { src: '/assets/ch9/08.jpg', uid: '7g9ds0MezNk', count: 7 },
      { src: '/assets/ch9/09.jpg', uid: 'Oc_iR3je0dy', count: 8 },
      { src: '/assets/ch9/10.jpg', uid: 'Vg430GCPBxh', count: 9 },
      { src: '/assets/ch9/11.jpg', uid: 'Uq3yCD6PRPT', count: 10 },
      { src: '/assets/ch9/12.jpg', uid: 'Xy7JkPzNqLd', count: 11 },
      { src: '/assets/ch9/13.jpg', uid: 'M4RtQGpH0Vx', count: 12 },
      { src: '/assets/ch9/14.jpg', uid: 'ZaW5FbYXK8J', count: 13 },
      { src: '/assets/ch9/15.jpg', uid: 'Ny6TpRvLJ3C', count: 14 }
    ]
  };

  nextChapter = {
    number: '02',
    chapterUid: '6308b590e5b',
    thumbnail: 'https://wsrv.nl/?url=cdn.meowing.org/uploads/jUBQtuVcnT4&w=150',
    timestamp: '4 days ago'
  };

  zoomLevel: number = 3;
  isBrowser: boolean;

  @ViewChildren('mangaImage') mangaImages!: QueryList<ElementRef<HTMLImageElement>>;

  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.mangaId = this.route.snapshot.paramMap.get('mangaId');
    this.chapterId = this.route.snapshot.paramMap.get('chapterId');
    this.setZoomLevel(this.zoomLevel);
    if (this.isBrowser) {
      this.loadDisqus();
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            this.loadImage(img);
            observer.unobserve(img);
          }
        });
      });

      this.mangaImages.forEach(img => {
        observer.observe(img.nativeElement);
      });
    }
  }

  loadImage(img: HTMLImageElement) {
    const realUrl = img.getAttribute('data-src');
    if (!realUrl || img.dataset['loading'] === 'true') return;

    img.dataset['loading'] = 'true';
    img.src = realUrl;

    img.onload = () => {
      img.dataset['loading'] = 'false';
    };

    img.onerror = () => {
      img.dataset['loading'] = 'false';
      setTimeout(() => this.loadImage(img), 2000);
    };
  }

  scrollToDown() {
    if (this.isBrowser && window.innerWidth > 640) {
      const currentY = window.scrollY;
      const destinationY = currentY + window.innerHeight;
      const duration = 1000;
      const startTime = Date.now();

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const scroll = () => {
        const currentTime = Date.now();
        const timeElapsed = currentTime - startTime;
        if (timeElapsed < duration) {
          const nextY = easeInOutQuad(timeElapsed, currentY, destinationY - currentY, duration);
          window.scrollTo(0, nextY);
          requestAnimationFrame(scroll);
        } else {
          window.scrollTo(0, destinationY);
        }
      };

      requestAnimationFrame(scroll);
    }
  }

  setZoomLevel(level: number) {
    this.zoomLevel = level;
    if (this.isBrowser) {
      document.body.style.setProperty('--width', `${this.zoomLevel * 10}px`);
      localStorage.setItem('zoom-0.2', this.zoomLevel.toString());
    }
  }

  loadDisqus() {
    (window as any).disqus_config = () => {
      (window as any).disqus_config.page = {
        identifier: `/comic/${this.manga.seriesUid}/chapter/${this.chapter.chapterUid}/`
      };
    };

    const script = document.createElement('script');
    script.src = 'https://magustoon-com.disqus.com/embed.js';
    script.setAttribute('data-timestamp', `${+new Date()}`);
    (document.head || document.body).appendChild(script);
  }
}