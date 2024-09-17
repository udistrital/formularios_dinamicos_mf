import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVersionComponent } from './view-version.component';

describe('ViewVersionComponent', () => {
  let component: ViewVersionComponent;
  let fixture: ComponentFixture<ViewVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewVersionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
