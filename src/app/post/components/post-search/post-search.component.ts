import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss'],
})
export class PostSearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(event: any): void {
    this.search.emit(event.target.value);
  }
}
