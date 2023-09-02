import { createAction, props } from '@ngrx/store';
import { Post, PostCreateDto, PostUpdateDto } from './post.model';

export const loadAll = createAction(
  '[Post Page] Load All',
  props<{ query: string; page: number; limit: number }>()
);

export const loadAllSuccess = createAction(
  '[Post API] Load All Success',
  props<{ posts: Post[] }>()
);

export const loadAllFailure = createAction(
  '[Post API] Load All Failure',
  props<{ error: unknown }>()
);

export const create = createAction(
  '[Post Page] Create',
  props<{ post: PostCreateDto }>()
);

export const createSuccess = createAction(
  '[Post API] Create Success',
  props<{ post: Post }>()
);

export const createFailure = createAction(
  '[Post API] Create Failure',
  props<{ error: unknown }>()
);

export const update = createAction(
  '[Post Page] Update',
  props<{ post: PostUpdateDto }>()
);

export const updateSuccess = createAction(
  '[Post API] Update Success',
  props<{ post: Post }>()
);

export const updateFailure = createAction(
  '[Post API] Update Failure',
  props<{ error: unknown }>()
);

export const remove = createAction(
  '[Post Page] Remove',
  props<{ id: string }>()
);

export const removeSuccess = createAction(
  '[Post API] Remove Success',
  props<{ id: string }>()
);

export const removeFailure = createAction(
  '[Post API] Remove Failure',
  props<{ error: unknown }>()
);
