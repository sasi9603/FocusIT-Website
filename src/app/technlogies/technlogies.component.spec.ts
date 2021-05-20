import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnlogiesComponent } from './technlogies.component';

describe('TechnlogiesComponent', () => {
  let component: TechnlogiesComponent;
  let fixture: ComponentFixture<TechnlogiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnlogiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnlogiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
