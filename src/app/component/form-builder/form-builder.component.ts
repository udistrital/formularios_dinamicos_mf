import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Formulario } from 'src/data/models/formulario.model';
import { Seccion } from 'src/data/models/seccion.model';
import { CrudFormularioDinamicoService } from 'src/app/services/crud-formulario-dinamico.service';

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

  constructor(private fb: FormBuilder, private translate: TranslateService,
    private crudFormularioDinamicoService: CrudFormularioDinamicoService
  ) { }

  ngOnInit(): void {
    if (this.formularioBase) {
      console.log("hay")
      this.formularioForm = this.formularioBase
    } else {
      console.log("no hay")
      this.formularioForm = this.fb.group({
        nombre: [''],
        tipo: 'accordion',
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
    const finalJson = {
      modulo_id: "66d60e724a11b8c318d4b10f",  
      formulario: {
        ...this.formulario,                    
        creado_por_id: 1,
        traduccion: true,                      
      }
    };
    
    console.log('Formulario Guardado: ', finalJson);
    this.crudFormularioDinamicoService.post('plantillas', finalJson).subscribe((res) => {
      if (res !== null) {
        console.log(res)
      }
    })
  }

  previsualizarFormulario() {
    if (this.formulario != null) {
      this.mostrarFormulario = !this.mostrarFormulario;
    }
  }
}
