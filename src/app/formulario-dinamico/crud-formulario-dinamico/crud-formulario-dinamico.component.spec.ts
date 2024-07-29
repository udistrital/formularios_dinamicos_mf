/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudFormularioDinamicoComponent } from './crud.formulario-dinamico.component';

describe('CrudFormularioDinamicoComponent', () => {
  let component: CrudFormularioDinamicoComponent;
  let fixture: ComponentFixture<CrudFormularioDinamicoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudFormularioDinamicoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFormularioDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
