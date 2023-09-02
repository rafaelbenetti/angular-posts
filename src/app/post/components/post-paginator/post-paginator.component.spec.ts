import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPaginatorComponent } from './post-paginator.component';

describe('PostPaginatorComponent', () => {
  let component: PostPaginatorComponent;
  let fixture: ComponentFixture<PostPaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostPaginatorComponent]
    });
    fixture = TestBed.createComponent(PostPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
