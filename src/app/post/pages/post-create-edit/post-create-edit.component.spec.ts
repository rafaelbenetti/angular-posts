import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateEditComponent } from './post-create-edit.component';

describe('PostCreateEditComponent', () => {
  let component: PostCreateEditComponent;
  let fixture: ComponentFixture<PostCreateEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCreateEditComponent]
    });
    fixture = TestBed.createComponent(PostCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
