import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerUpdateComponent } from './lecturer-update.component';

describe('LecturerUpdateComponent', () => {
  let component: LecturerUpdateComponent;
  let fixture: ComponentFixture<LecturerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturerUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
