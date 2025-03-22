import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { inject } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'manga_app';

  constructor() {
    inject(); // استدعاء Vercel Analytics هنا
  }

  scrollToTop() {
    console.log('Scroll to Top button clicked'); // Debug log
    if (typeof window !== 'undefined') {
      console.log('Window is defined, scrolling to top'); // Debug log
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      console.log('Window is not defined (likely SSR)'); // Debug log
    }
  }
}