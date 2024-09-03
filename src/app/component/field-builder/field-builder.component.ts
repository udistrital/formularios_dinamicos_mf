import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TiposCampos } from 'src/data/models/tipos.model';

@Component({
  selector: 'field-builder',
  templateUrl: './field-builder.component.html',
  styleUrls: ['./field-builder.component.scss']
})
export class FieldBuilderComponent implements OnInit {
  @Input() campoForm: FormGroup;
  @Input() numero: number;

  tiposCampos = TiposCampos.opciones;
  agregarOpciones: boolean = false;
  ingresarURL: boolean = false;

  constructor(private fb: FormBuilder, private translate: TranslateService) {}

  ngOnInit(): void {}

  get opciones(): FormArray {
    console.log('salida de opciones')
    console.log(this.campoForm.get('opciones') as FormArray)
    return this.campoForm.get('opciones') as FormArray;
  }

  
  agregarOpcion() {
    this.opciones.push(this.crearOpcion());
  }
  
  eliminarOpcion(index: number) {
    this.opciones.removeAt(index);
  }
  
  crearOpcion(): FormGroup {
    return this.fb.group({
      valor: ['', Validators.required],
      etiqueta: ['', Validators.required],
      deshabilitado: [false]
    });
  }
  
  onToggleChange(value: string) {
    this.agregarOpciones = value === 'estaticas';
    this.ingresarURL = value === 'dinamicas';
  }
  
}
