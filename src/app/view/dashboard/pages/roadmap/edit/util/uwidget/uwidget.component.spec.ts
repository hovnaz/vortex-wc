import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwidgetComponent } from './uwidget.component';

describe('UwidgetComponent', () => {
  let component: UwidgetComponent;
  let fixture: ComponentFixture<UwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UwidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
