import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { Post } from '../../post.model';
import { selectPostById } from '../../post.reducer';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {
  post$: Observable<Post | undefined>;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.post$ = this.route.params.pipe(
      switchMap((params) => {
        return this.store.select(selectPostById(params['id']));
      })
    );
  }
}
