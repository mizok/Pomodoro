import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBtnComponent } from './animated-btn.component';

describe('AnimatedBtnComponent', () => {
  let component: AnimatedBtnComponent;
  let fixture: ComponentFixture<AnimatedBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
