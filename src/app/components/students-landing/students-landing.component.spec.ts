import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsLandingComponent } from './students-landing.component';

describe('StudentsLandingComponent', () => {
  let component: StudentsLandingComponent;
  let fixture: ComponentFixture<StudentsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
