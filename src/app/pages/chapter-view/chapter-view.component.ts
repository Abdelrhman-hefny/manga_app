import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-chapter-view',
  templateUrl: './chapter-view.component.html',
  styleUrls: ['./chapter-view.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule to imports
    NgFor,
    NgIf,
    RouterLink,
    FormsModule,
  ],
})
export class ChapterViewComponent implements OnInit, AfterViewInit {
  mangaId: string | null = null;
  chapterId: string | null = null;

  manga = {
    title: 'Hold Her Tighter So She Wouldn’t Run Away',
    seriesUid: '63089f46876',
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
      { src: '/assets/ch9/15.jpg', uid: 'Ny6TpRvLJ3C', count: 14 },
    ],
  };

  nextChapter = {
    number: '02',
    chapterUid: '6308b590e5b',
    thumbnail: 'https://wsrv.nl/?url=cdn.meowing.org/uploads/jUBQtuVcnT4&w=150',
    timestamp: '4 days ago',
  };

  chapters = [
    {
      number: '01',
      chapterUid: '6308a9092bd',
      thumbnail:
        'https://wsrv.nl/?url=cdn.meowing.org/uploads/jUBQtuVcnT4&w=150',
    },
    {
      number: '02',
      chapterUid: '6308b590e5b',
      thumbnail:
        'https://wsrv.nl/?url=cdn.meowing.org/uploads/jUBQtuVcnT4&w=150',
    },
    {
      number: '03',
      chapterUid: '6308c1234ab',
      thumbnail:
        'https://wsrv.nl/?url=cdn.meowing.org/uploads/jUBQtuVcnT4&w=150',
    },
    {
      number: '04',
      chapterUid: '6308d5678ef',
      thumbnail:
        'https://wsrv.nl/?url=cdn.meowing.org/uploads/jUBQtuVcnT4&w=150',
    },
    {
      number: '05',
      chapterUid: '6308e9012cd',
      thumbnail:
        'https://wsrv.nl/?url=cdn.meowing.org/uploads/jUBQtuVcnT4&w=150',
    },
  ];

  zoomLevel: number = 3;
  zoomMin: number = 1;
  zoomMax: number = 10;
  isBrowser: boolean;
  private lastScrollTop: number = 0;
  isHeaderVisible: boolean = true;
  isChaptersModalVisible: boolean = false;

  @ViewChildren('mangaImage') mangaImages!: QueryList<
    ElementRef<HTMLImageElement>
  >;

  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.mangaId = this.route.snapshot.paramMap.get('mangaId');
    this.chapterId = this.route.snapshot.paramMap.get('chapterId');
    if (this.isBrowser) {
      const storedZoom = localStorage.getItem('zoom-0.2');
      this.zoomLevel = storedZoom ? parseInt(storedZoom, 10) : 3;
      console.log('Initial zoom level:', this.zoomLevel);
      this.setZoomLevel(this.zoomLevel);
      this.loadDisqus();
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            this.loadImage(img);
            observer.unobserve(img);
          }
        });
      });

      this.mangaImages.forEach((img) => {
        observer.observe(img.nativeElement);
      });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (!this.isBrowser) return;

    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop <= 0) {
      this.isHeaderVisible = true;
      this.cdr.detectChanges();
      return;
    }

    if (currentScrollTop > this.lastScrollTop) {
      this.isHeaderVisible = false;
    } else {
      this.isHeaderVisible = true;
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    this.cdr.detectChanges();
  }

  toggleChaptersModal() {
    this.isChaptersModalVisible = !this.isChaptersModalVisible;
    console.log('Modal visibility:', this.isChaptersModalVisible);
    this.cdr.detectChanges();
  }

  closeChaptersModal() {
    this.isChaptersModalVisible = false;
    this.cdr.detectChanges();
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
          const nextY = easeInOutQuad(
            timeElapsed,
            currentY,
            destinationY - currentY,
            duration
          );
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
      const widthValue = `${this.zoomLevel * 10}%`;
      console.log('Setting --width to:', widthValue);
      document.body.style.setProperty('--width', widthValue);
      localStorage.setItem('zoom-0.2', this.zoomLevel.toString());
      this.cdr.detectChanges();
    }
  }

  zoomIn() {
    if (this.zoomLevel < this.zoomMax) {
      console.log('Zooming in, current level:', this.zoomLevel);
      this.setZoomLevel(this.zoomLevel + 1);
    }
  }

  zoomOut() {
    if (this.zoomLevel > this.zoomMin) {
      console.log('Zooming out, current level:', this.zoomLevel);
      this.setZoomLevel(this.zoomLevel - 1);
    }
  }

  loadDisqus() {
    (window as any).disqus_config = () => {
      (window as any).disqus_config.page = {
        identifier: `/comic/${this.manga.seriesUid}/chapter/${this.chapter.chapterUid}/`,
      };
    };

    const script = document.createElement('script');
    script.src = 'https://magustoon-com.disqus.com/embed.js';
    script.setAttribute('data-timestamp', `${+new Date()}`);
    (document.head || document.body).appendChild(script);
  }
}
