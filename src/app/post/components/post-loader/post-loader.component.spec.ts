import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoaderComponent } from './post-loader.component';

describe('PostLoaderComponent', () => {
  let component: PostLoaderComponent;
  let fixture: ComponentFixture<PostLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostLoaderComponent]
    });
    fixture = TestBed.createComponent(PostLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
