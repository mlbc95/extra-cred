import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorVerifyComponent } from './professor-verify.component';

describe('ProfessorVerifyComponent', () => {
  let component: ProfessorVerifyComponent;
  let fixture: ComponentFixture<ProfessorVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
