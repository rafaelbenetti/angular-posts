import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';

import * as PostActions from './post.action';
import { Post } from './post.model';

export interface State extends EntityState<Post> {
  error: unknown | null;
  loading: boolean;
  selectedId: string | null;
}

export const adapter = createEntityAdapter<Post>();

export const initialState: State = adapter.getInitialState({
  error: null,
  loading: false,
  selectedId: null,
});

export const { name, reducer, selectPostState, selectLoading, selectError } =
  createFeature({
    name: 'post',
    reducer: createReducer(
      initialState,
      on(PostActions.loadAll, (state) => ({ ...state, loading: true })),
      on(PostActions.loadAllSuccess, (state, { posts }) =>
        adapter.setAll(posts, { ...state, loading: false })
      ),
      on(PostActions.loadAllFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      })),
      on(PostActions.create, (state) => ({ ...state, loading: true })),
      on(PostActions.createSuccess, (state, { post }) => {
        // This is needed because graphqlzero returns always id 101.
        const newId = `${+state.ids[state.ids.length - 1] + 1}`;
        return adapter.addOne(
          { ...post, id: newId },
          { ...state, loading: false }
        );
      }),
      on(PostActions.createFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      })),
      on(PostActions.update, (state) => ({ ...state, loading: true })),
      on(PostActions.updateSuccess, (state, { post }) =>
        adapter.updateOne(
          { id: post.id, changes: post },
          { ...state, loading: false }
        )
      ),
      on(PostActions.updateFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      })),
      on(PostActions.remove, (state) => ({ ...state, loading: true })),
      on(PostActions.removeSuccess, (state, { id }) =>
        adapter.removeOne(id, { ...state, loading: false })
      ),
      on(PostActions.removeFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      }))
    ),
  });

export const { selectAll: selectPosts } = adapter.getSelectors(selectPostState);

export const selectPostById = (postId: string) =>
  createSelector(selectPosts, (posts: Post[]) =>
    posts.find((p) => p.id === postId)
  );
