import { RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SearchComponent } from "../../pages/search/search.component";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, LoginComponent, SearchComponent, CommonModule, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  showModal: boolean = false;

  openSearchModal() {
    this.showModal = true;
  }

  closeSearchModal() {
    this.showModal = false;
  } searchQuery: string = '';
  searchResults: string[] = [];

  onSearchInput() {
    if (this.searchQuery) {
      this.searchResults = ['Manga 1', 'Manga 2', 'Manga 3'].filter(item =>
        item.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.searchResults = [];
    }
  }
}