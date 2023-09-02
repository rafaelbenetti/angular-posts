import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-loader',
  templateUrl: './post-loader.component.html',
  styleUrls: ['./post-loader.component.scss'],
})
export class PostLoaderComponent {
  @Input() loading: boolean;
}
