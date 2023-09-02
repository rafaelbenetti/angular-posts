import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { Post, PostCreateDto, PostUpdateDto } from './post.model';

const GET_POSTS = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;

const ADD_POST = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

const UPDATE_POST = gql`
  mutation ($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      body
    }
  }
`;

const DELETE_POST = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private apollo: Apollo) {}

  findAll(query: string, page: number, limit: number): Observable<Post[]> {
    return this.apollo
      .watchQuery<any>({
        query: GET_POSTS,
        variables: {
          options: {
            paginate: {
              page: query ? 0 : page,
              limit: query ? 100 : limit,
            },
          },
        },
      })
      .valueChanges.pipe(
        map((value) => {
          // TODO: Move the search by query to the backend/graphql
          const posts = value.data.posts.data;
          if (query) {
            const filteredResults = posts.filter((post: Post) => {
              return post.title.includes(query) || post.body.includes(query);
            });

            if (filteredResults.length <= limit) return filteredResults;

            return filteredResults.slice(0, limit);
          }
          return posts;
        })
      );
  }

  create(input: PostCreateDto): Observable<Post> {
    return this.apollo
      .mutate({
        mutation: ADD_POST,
        variables: {
          input,
        },
      })
      .pipe(map((value: any) => value.data?.createPost as Post));
  }

  update(input: PostUpdateDto): Observable<Post> {
    return this.apollo
      .mutate({
        mutation: UPDATE_POST,
        variables: {
          id: input.id,
          input: { body: input.body },
        },
      })
      .pipe(map((value: any) => value.data?.updatePost as Post));
  }

  remove(id: string): Observable<any> {
    return this.apollo.mutate({
      mutation: DELETE_POST,
      variables: {
        id: id,
      },
    });
  }
}
