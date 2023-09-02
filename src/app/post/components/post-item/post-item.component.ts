import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {
  @Output() delete = new EventEmitter<string>();
  @Input() post: Post;

  constructor(private router: Router) {}

  onDelete(id: string): void {
    this.delete.emit(id);
  }

  onEdit(id: string): void {
    this.router.navigateByUrl(`posts/edit/${id}`);
  }
}
