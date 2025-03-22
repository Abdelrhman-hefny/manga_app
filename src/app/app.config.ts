import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LastUpdateComponent } from './components/last-update/last-update.component';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { LatestComponent } from './pages/latest/latest.component';
import { SeriesComponent } from './pages/series/series.component';
import { ManhwaDetailsComponent } from './pages/manhwa-details/manhwa-details.component';
import { ChapterViewComponent } from './pages/chapter-view/chapter-view.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'updates', component: LastUpdateComponent },
      { path: 'Latest', component: LatestComponent }, // تعديل المسارات هنا
      { path: 'Series', component: SeriesComponent }, // مؤقتًا، ضع أي مكون موجود لديك
      { path: 'Library', component: LibraryComponent }, // مؤقتًا، ضع أي مكون موجود لديك
      { path: 'manga-detailes', component: ManhwaDetailsComponent }, // مؤقتًا، ضع أي مكون موجود لديك
      { path: 'series/chapter1', component: ChapterViewComponent }, // New route for chapter view
      { path: '**', redirectTo: '/', pathMatch: 'full' },
    ]),
    provideClientHydration(),
  ],
};
