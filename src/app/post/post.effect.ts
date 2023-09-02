import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';

import * as PostActions from './post.action';
import { PostService } from './post.service';

@Injectable()
export class PostEffects {
  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadAll),
      switchMap(({ query, page, limit }) =>
        this.postService.findAll(query, page, limit).pipe(
          map((result) => PostActions.loadAllSuccess({ posts: result })),
          catchError((error) => of(PostActions.loadAllFailure({ error })))
        )
      )
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.create),
      concatMap(({ post }) =>
        this.postService.create(post).pipe(
          map((result) => PostActions.createSuccess({ post: result })),
          catchError((error) => of(PostActions.createFailure({ error })))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.update),
      concatMap(({ post }) =>
        this.postService.update(post).pipe(
          map((result) => PostActions.updateSuccess({ post: result })),
          catchError((error) => of(PostActions.updateFailure({ error })))
        )
      )
    )
  );

  remove$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.remove),
      concatMap(({ id }) =>
        this.postService.remove(id).pipe(
          map((_) => PostActions.removeSuccess({ id })),
          catchError((error) => of(PostActions.removeFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {}
}
