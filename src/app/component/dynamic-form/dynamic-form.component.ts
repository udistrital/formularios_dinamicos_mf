import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericService } from 'src/app/services/generic.service';
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

        if (campo.url) {
          this.genericService.getSelectOptions(campo.url).subscribe(options => {
            campo.opciones = options;
          });
        }
      });
    });
  }

  getValidators(validaciones): any[] {
    console.log(validaciones)
    const validators = [];
    if (validaciones){
      validaciones.forEach((validacion => {
        if (validacion) {
          if (validacion.tipo == 'requerido') {
            validators.push(Validators.required);
          }
          if (validacion.tipo == 'minLength') {
            validators.push(Validators.minLength(validacion.valor));
          }
          if (validacion.tipo == 'maxLength') {
            validators.push(Validators.maxLength(validacion.valor));
          }
          if (validacion.tipo == 'patron') {
            validators.push(Validators.pattern(validacion.valor));
          }
          if (validacion.tipo == 'min') {
            validators.push(Validators.min(validacion.valor));
          }
          if (validacion.tipo == 'max') {
            validators.push(Validators.max(validacion.valor));
          }
          if (validacion.tipo == 'email') {
            validators.push(Validators.email);
          }
        }
      }))
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
