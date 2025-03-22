// nav-bar.component.ts
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// Initialization for ES Users
// @ts-ignore

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  showSearch = false;

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
}
