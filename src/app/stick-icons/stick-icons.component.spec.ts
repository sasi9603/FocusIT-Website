import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickIconsComponent } from './stick-icons.component';

describe('StickIconsComponent', () => {
  let component: StickIconsComponent;
  let fixture: ComponentFixture<StickIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
