import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import * as PostActions from '../../post.action';
import { selectPostById } from '../../post.reducer';

@Component({
  selector: 'app-post-create-edit',
  templateUrl: './post-create-edit.component.html',
  styleUrls: ['./post-create-edit.component.scss'],
})
export class PostCreateEditComponent {
  postId: string;
  postForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    body: new FormControl(null, Validators.required),
  });

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params
      .pipe(
        switchMap((params) => {
          this.postId = params['id'];
          return this.store.select(selectPostById(this.postId));
        })
      )
      .subscribe((post) => {
        if (post) {
          this.postForm.controls['title'].disable();
          this.postForm.patchValue(post);
        }
      });
  }

  onSave(): void {
    const post = this.postForm.value;

    if (this.postId) {
      this.store.dispatch(
        PostActions.update({ post: { ...post, id: this.postId } })
      );
    } else {
      this.store.dispatch(PostActions.create({ post }));
    }

    this.router.navigateByUrl('posts');
  }
}
