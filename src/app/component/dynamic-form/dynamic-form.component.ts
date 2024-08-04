import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() formulario: any;
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
    this.formulario.secciones.forEach(seccion => {
        seccion.campos.forEach(campo => {
        //console.log(campo.nombre);
        const validators = this.getValidators(campo.validaciones);
        this.form.addControl(campo.nombre, this.fb.control({ value: campo.valor, disabled: campo.deshabilitado }, validators));
      });
    });
  }

  getValidators(validaciones): any[] {
    const validators = [];
    if (validaciones) {
      if (validaciones.requerido) {
        validators.push(Validators.required);
      }
      if (validaciones.minLength) {
        validators.push(Validators.minLength(validaciones.minLength));
      }
      if (validaciones.maxLength) {
        validators.push(Validators.maxLength(validaciones.maxLength));
      }
      if (validaciones.patron) {
        validators.push(Validators.pattern(validaciones.patron));
      }
      if (validaciones.min) {
        validators.push(Validators.min(validaciones.min));
      }
      if (validaciones.max) {
        validators.push(Validators.max(validaciones.max));
      }
      if (validaciones.email) {
        validators.push(Validators.email);
      }
    }
    //console.log(validators)
    return validators;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted', this.form.value);
    } else {
      console.log('Form is invalid', this.form);
    }
  }
}
