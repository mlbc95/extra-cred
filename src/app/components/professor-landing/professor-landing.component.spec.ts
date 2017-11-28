import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorLandingComponent } from './professor-landing.component';

describe('ProfessorLandingComponent', () => {
  let component: ProfessorLandingComponent;
  let fixture: ComponentFixture<ProfessorLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
