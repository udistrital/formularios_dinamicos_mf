import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidateBuilderComponent } from './validate-builder.component';

describe('ValidateBuilderComponent', () => {
  let component: ValidateBuilderComponent;
  let fixture: ComponentFixture<ValidateBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateBuilderComponent]
    });
    fixture = TestBed.createComponent(ValidateBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
