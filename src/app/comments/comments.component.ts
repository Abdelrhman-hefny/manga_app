import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For ngModel
import { NgClass, NgFor, NgIf } from '@angular/common'; // For template directives

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  standalone: true,
  imports: [
    FormsModule, // Required for ngModel
    NgIf,
    NgFor,
    NgClass
  ]
})
export class CommentsComponent {
  // Default comments for demonstration
  comments = [
    {
      username: 'MangaFan123',
      timestamp: '2 hours ago',
      text: 'This manga is amazing! I love the romance and drama. Can’t wait for the next chapter!'
    },
    {
      username: 'TheoLover',
      timestamp: '1 day ago',
      text: 'Theo and Yuelina are such a cute couple! I hope they get a happy ending.'
    },
    {
      username: 'ReaderX',
      timestamp: '3 days ago',
      text: 'The art style is beautiful, but the pacing feels a bit slow. Still enjoying it though!'
    }
  ];

  newComment: string = '';

  addComment() {
    if (this.newComment.trim()) {
      const newComment = {
        username: 'GuestUser', // Placeholder username (can be updated with authentication later)
        timestamp: 'Just now',
        text: this.newComment.trim()
      };
      this.comments.unshift(newComment); // Add the new comment to the top
      this.newComment = ''; // Clear the input field
    }
  }
}