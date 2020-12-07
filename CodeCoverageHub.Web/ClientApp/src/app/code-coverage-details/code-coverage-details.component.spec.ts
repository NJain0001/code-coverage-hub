import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCoverageDetailsComponent } from './code-coverage-details.component';

describe('CodeCoverageDetailsComponent', () => {
  let component: CodeCoverageDetailsComponent;
  let fixture: ComponentFixture<CodeCoverageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCoverageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCoverageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
