import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicPageComponent } from './classic-page.component';

describe('ClassicPageComponent', () => {
  let component: ClassicPageComponent;
  let fixture: ComponentFixture<ClassicPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicPageComponent]
    });
    fixture = TestBed.createComponent(ClassicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
