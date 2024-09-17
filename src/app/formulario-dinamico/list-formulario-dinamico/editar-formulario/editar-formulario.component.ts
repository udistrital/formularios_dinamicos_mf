import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericService } from 'src/app/services/generic.service';
import { Formulario } from 'src/data/models/formulario.model';

@Component({
  selector: 'app-editar-formulario',
  templateUrl: './editar-formulario.component.html',
  styleUrl: './editar-formulario.component.scss'
})
export class EditarFormularioComponent implements OnInit {
  form: FormGroup;
  isLoading = true

  constructor(@Inject(MAT_DIALOG_DATA) public data: Formulario, private fb: FormBuilder, private genericService: GenericService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [this.data.nombre],
      secciones: this.getSecciones(this.data.secciones)
    });

    this.isLoading = false
  }

  getSecciones(secciones: any): FormArray {

    let ArraySecciones: FormArray = this.fb.array([]);
    secciones.forEach((seccion => {
      ArraySecciones.push(
        this.fb.group({
          nombre: [seccion.nombre],
          descripcion: [seccion?.descripcion],
          campos: this.getCampos(seccion.campos)
        })
      )
    }))

    return ArraySecciones
  }

  getCampos(campos: any): FormArray {
    let ArrayCampos: FormArray = this.fb.array([]);
    campos.forEach((campo => {
      ArrayCampos.push(
        this.fb.group({
          nombre: [campo.nombre],
          etiqueta: [campo.etiqueta],
          placeholder: [campo?.placeholder],
          tipo: [campo.tipo],
          opciones: this.getOpciones(campo.opciones),
          validaciones: this.getValidaciones(campo.validaciones),
          deshabilitado: [campo.deshabilitado || false],
          url: [campo?.url]
        })
      )
    }))

    return ArrayCampos
  }

  getOpciones(opciones: any): FormArray {
    let ArrayOpciones: FormArray = this.fb.array([]);

    if (opciones) {
      console.log("opciones")
      opciones.forEach((validacion => {
        ArrayOpciones.push(
          this.fb.group({
            valor: [validacion.valor, Validators.required],
            etiqueta: [validacion.etiqueta, Validators.required],
            deshabilitado: [validacion?.deshabilitado]
          })
        )
      }))
    }

    return ArrayOpciones
  }

  getValidaciones(validaciones: any): FormArray {
    let ArrayValidaciones: FormArray = this.fb.array([]);

    if (validaciones) {
      console.log("validaciones")
      validaciones.forEach((validacion => {
        ArrayValidaciones.push(
          this.fb.group({
            tipo: [validacion.tipo],
            valor: [validacion?.valor]
          })
        )
      }))
    }

    return ArrayValidaciones
  }

}
