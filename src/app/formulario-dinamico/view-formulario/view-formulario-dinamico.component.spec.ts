/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewFormularioDinamicoComponent } from './view-formulario-dinamico.component';

describe('ViewFormularioDinamicoComponent', () => {
  let component: ViewFormularioDinamicoComponent;
  let fixture: ComponentFixture<ViewFormularioDinamicoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFormularioDinamicoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFormularioDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
