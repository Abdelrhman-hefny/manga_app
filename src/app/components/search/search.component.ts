import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  showModal: boolean = false;
  searchQuery: string = '';
  searchResults: string[] = [];

  openSearchModal() {
    this.showModal = true;
  }

  closeSearchModal() {
    this.showModal = false;
  }

  onSearchInput() {
    if (this.searchQuery) {
      // منطق البحث، على سبيل المثال نتائج ثابتة (يمكنك ربطها بـ API)
      this.searchResults = [
        'Manga Title 1',
        'Manga Title 2',
        'Manga Title 3'
      ].filter(item => item.toLowerCase().includes(this.searchQuery.toLowerCase()));
    } else {
      this.searchResults = [];
    }
  }
}
