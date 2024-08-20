import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericService } from 'src/data/generic.service';
import { Formulario } from 'src/data/models/formulario.model';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() formulario: Formulario;
  form: FormGroup;

  constructor(private fb: FormBuilder, private genericService: GenericService) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
    this.formulario.secciones.forEach(seccion => {
        seccion.campos.forEach(campo => {
        const validators = this.getValidators(campo.validaciones);
        this.form.addControl(campo.nombre, this.fb.control({ value: campo.valor, disabled: campo.deshabilitado }, validators));

        if (campo.tipo === 'select' && campo.url) {
          this.genericService.getSelectOptions(campo.url).subscribe(options => {
            campo.opciones = options;
          });
        }
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