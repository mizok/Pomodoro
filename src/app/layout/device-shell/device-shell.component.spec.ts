import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceShellComponent } from './device-shell.component';

describe('DeviceShellComponent', () => {
  let component: DeviceShellComponent;
  let fixture: ComponentFixture<DeviceShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
