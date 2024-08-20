import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Campo } from 'src/data/models/campo.model';

@Component({
  selector: 'section-builder',
  templateUrl: './section-builder.component.html',
  styleUrls: ['./section-builder.component.scss']
})
export class SectionBuilderComponent implements OnInit {
  @Input() seccionForm: FormGroup;

  constructor(private fb: FormBuilder, private translate: TranslateService) {}

  ngOnInit(): void {}

  get campos(): FormArray {
    return this.seccionForm.get('campos') as FormArray;
  }

  agregarCampo() {
    const nuevoCampo: Campo = {
      nombre: '',
      etiqueta: '',
      tipo: 'text',
      validaciones: {},
      opciones: [],
      deshabilitado: false
    };
    (this.seccionForm.get('campos') as FormArray).push(this.crearCampoFormGroup(nuevoCampo));
  }

  crearCampoFormGroup(campo: Campo): FormGroup {
    return this.fb.group({
      nombre: [campo.nombre],
      etiqueta: [campo.etiqueta],
      tipo: [campo.tipo],
      opciones: this.fb.array([]),
      validaciones: this.fb.group({
        required: [campo.validaciones?.required || false],
        min: [campo.validaciones?.min || null],
        max: [campo.validaciones?.max || null]
      }),
      deshabilitado: [campo.deshabilitado || false]
    });
  }

  eliminarCampo(index: number) {
    (this.seccionForm.get('campos') as FormArray).removeAt(index);
  }
}
