import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from '../graphql.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostLoaderComponent } from './components/post-loader/post-loader.component';
import { PostPaginatorComponent } from './components/post-paginator/post-paginator.component';
import { PostSearchComponent } from './components/post-search/post-search.component';
import { PostCreateEditComponent } from './pages/post-create-edit/post-create-edit.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostRoutingModule } from './post-routing.module';
import { PostStoreModule } from './post-store.module';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    PostPaginatorComponent,
    PostSearchComponent,
    PostItemComponent,
    PostLoaderComponent,
    PostsComponent,
    PostDetailsComponent,
    PostCreateEditComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    GraphQLModule,
    HttpClientModule,
    PostStoreModule,
    ReactiveFormsModule,
  ],
  providers: [PostService],
})
export class PostModule {}
