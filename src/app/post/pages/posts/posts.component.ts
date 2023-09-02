import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject, combineLatest, debounceTime, map, tap } from 'rxjs';
import * as PostActions from '../../post.action';
import { selectLoading, selectPosts } from '../../post.reducer';

interface SearchParams {
  query: string;
  page: number;
  limit: number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  data$ = combineLatest([
    this.store.pipe(select(selectLoading)),
    this.store.pipe(select(selectPosts)),
  ]).pipe(map(([loading, posts]) => ({ loading, posts })));

  searchParams$: Subject<SearchParams> = new Subject<SearchParams>();
  params: SearchParams = { query: '', page: 0, limit: 10 };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.searchParams$
      .pipe(
        debounceTime(500),
        tap((params) => {
          this.store.dispatch(PostActions.loadAll({ ...params }));
        })
      )
      .subscribe();

    this.searchParams$.next(this.params);
  }

  onPageChange(page: number): void {
    this.searchParams$.next({ ...this.params, page });
  }

  onSearchChange(query: string): void {
    this.searchParams$.next({ ...this.params, query });
  }

  onDelete(id: string): void {
    this.store.dispatch(PostActions.remove({ id }));
  }
}
