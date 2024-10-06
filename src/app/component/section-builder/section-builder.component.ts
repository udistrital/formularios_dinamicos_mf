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
  @Input() numero: number;

  constructor(private fb: FormBuilder, private translate: TranslateService) {}

  ngOnInit(): void {}

  get campos(): FormArray {
    return this.seccionForm.get('campos') as FormArray;
  }

  agregarCampo() {
    const nuevoCampo: Campo = {
      nombre: '',
      etiqueta: '',
      placeholder: '',
      tipo: 'text',
      validaciones: {},
      parametros: {},
      deshabilitado: false,
    };
    this.campos.push(this.crearCampoFormGroup(nuevoCampo));
  }

  crearCampoFormGroup(campo: Campo): FormGroup {
    return this.fb.group({
      nombre: [campo.nombre],
      etiqueta: [campo.etiqueta],
      placeholder: [campo.placeholder],
      tipo: [campo.tipo],
      deshabilitado: [campo.deshabilitado || false],
      parametros: this.fb.group({
        opciones: this.fb.array([]),
        url: [campo.url || '']
      }),
      validaciones: this.fb.array([]),
    });
  }
  eliminarCampo(index: number) {
    this.campos.removeAt(index);
  }
}
