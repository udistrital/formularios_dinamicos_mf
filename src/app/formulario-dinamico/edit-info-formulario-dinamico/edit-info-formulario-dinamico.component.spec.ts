import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoFormularioDinamicoComponent } from './edit-info-formulario-dinamico.component';

describe('EditInfoFormularioDinamicoComponent', () => {
  let component: EditInfoFormularioDinamicoComponent;
  let fixture: ComponentFixture<EditInfoFormularioDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditInfoFormularioDinamicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInfoFormularioDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
