import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostEffects } from './post.effect';
import { name, reducer } from './post.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(name, reducer),
    EffectsModule.forFeature([PostEffects]),
  ],
})
export class PostStoreModule {}
