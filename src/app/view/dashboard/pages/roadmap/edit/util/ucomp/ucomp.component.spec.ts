import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcompComponent } from './ucomp.component';

describe('UcompComponent', () => {
  let component: UcompComponent;
  let fixture: ComponentFixture<UcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
