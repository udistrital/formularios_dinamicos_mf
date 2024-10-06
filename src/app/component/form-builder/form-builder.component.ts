import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Formulario } from 'src/data/models/formulario.model';
import { Seccion } from 'src/data/models/seccion.model';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  @Input() formularioBase: FormGroup;
  formularioForm: FormGroup;
  formulario: Formulario;
  mostrarFormulario: boolean = false;

  constructor(private fb: FormBuilder, private translate: TranslateService) { }

  ngOnInit(): void {
    if (this.formularioBase) {
      console.log("hay")
      this.formularioForm = this.formularioBase
    } else {
      console.log("no hay")
      this.formularioForm = this.fb.group({
        nombre: [''],
        secciones: this.fb.array([])
      });
    }
  }

  get secciones(): FormArray {
    return this.formularioForm.get('secciones') as FormArray;
  }

  agregarSeccion() {
    const nuevaSeccion: Seccion = {
      nombre: '',
      descripcion: '',
      campos: []
    };

    this.secciones.push(this.crearSeccionFormGroup(nuevaSeccion));
  }

  crearSeccionFormGroup(seccion: Seccion): FormGroup {
    return this.fb.group({
      nombre: [seccion.nombre],
      descripcion: [seccion.descripcion],
      campos: this.fb.array([])
    });
  }

  eliminarSeccion(index: number) {
    this.secciones.removeAt(index);
  }

  guardarFormulario() {
    const formularioValue: Formulario = this.formularioForm.value;
    const jsonString = JSON.stringify(formularioValue);
    this.formulario = JSON.parse(jsonString);
    console.log(this.formulario)
    console.log('Formulario Guardado:', this.formulario);
  }

  previsualizarFormulario() {
    if (this.formulario != null) {
      this.mostrarFormulario = !this.mostrarFormulario;
    }
  }
}
