import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { inject } from '@vercel/analytics';

inject();
@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, FooterComponent, NavBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'manga_app';
}
