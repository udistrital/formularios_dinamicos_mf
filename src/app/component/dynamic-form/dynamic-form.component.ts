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
  @Input() modo: 'crear' | 'editar' = 'crear';
  form: FormGroup;

  constructor(private fb: FormBuilder, private genericService: GenericService) { }

  ngOnInit(): void {
    this.form = this.fb.group({});

    this.formulario.secciones.forEach(seccion => {
      seccion.campos.forEach(campo => {
        const validators = this.getValidators(campo.validaciones);
        
        // Crear el control del formulario
        this.form.addControl(campo.nombre, this.fb.control({ value: campo.valor || '', disabled: campo.deshabilitado }, validators));
        
        // Verificar si el campo tiene un URL para opciones dinámicas
        if (campo.parametros?.url) {
          this.genericService.getSelectOptions(campo.parametros.url).subscribe(options => {
            campo.parametros.opciones = options;
          });
        }
      });
    });
  }

  getValidators(validaciones): any[] {
    console.log(validaciones)
    const validators = [];
    if (validaciones) {
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

  guardarYAvanzar(stepper: any, indiceSeccion: number): void {
    const seccion = this.formulario.secciones[indiceSeccion];
    const formData = this.form.value;
    const respuestaSeccion = {};
    
    seccion.campos.forEach(campo => {
      respuestaSeccion[campo.nombre] = {
        valor: formData[campo.nombre],
        servicio: campo.servicio,
        endpoint: campo.endpoint,
        agrupado: campo.agrupado,
        campo: campo.campo
      };
    });

    console.log(`Datos guardados de la sección ${seccion.nombre}:`, respuestaSeccion);

    // Avanzar al siguiente paso del stepper
    stepper.next();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      const respuesta = {};
  
      this.formulario.secciones.forEach(seccion => {
        seccion.campos.forEach(campo => {
          respuesta[campo.nombre] = {
            valor: formData[campo.nombre], 
            servicio: campo.servicio,
            endpoint: campo.endpoint,
            agrupado: campo.agrupado,
            campo: campo.campo
          };
        });
      });
  
      if (this.modo === 'crear') {
        console.log('Registro creado', respuesta);
      } else if (this.modo === 'editar') {
        console.log('Registro actualizado', respuesta);
      }
    } else {
      console.log('Form is invalid', this.form);
    }
  }
}
