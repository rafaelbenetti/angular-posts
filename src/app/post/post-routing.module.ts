import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreateEditComponent } from './pages/post-create-edit/post-create-edit.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {
    path: 'view/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'create',
    component: PostCreateEditComponent,
  },
  {
    path: 'edit/:id',
    component: PostCreateEditComponent,
  },
  {
    path: '',
    component: PostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
