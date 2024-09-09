import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { TiposValidaciones } from "src/data/models/validaciones.model";

@Component({
  selector: 'validate-builder',
  templateUrl: './validate-builder.component.html',
  styleUrls: ['./validate-builder.component.scss']
})
export class ValidateBuilderComponent implements OnInit {
  @Input() validateForm: FormGroup;
  @Input() numero: number;

  agregarValidaciones: boolean = false;
  tiposValidaciones = TiposValidaciones.opciones

  constructor(private fb: FormBuilder, private translate: TranslateService) { }

  ngOnInit(): void { 
    console.log(this.validateForm)
  }

  get validaciones(): FormArray{
    console.log('validaciones')
    console.log(this.validateForm.get('validaciones'))
    return this.validateForm.get('validaciones') as FormArray;
  }
  agregarValidacion() {
    this.validaciones.push(this.crearValidacion());
    this.agregarValidaciones = true
  }

  crearValidacion(): FormGroup {
    return this.fb.group({
      tipo: '',
      valor: ''
    });
  }

  eliminarValidacion(index: number) {
    this.validaciones.removeAt(index);
  }

}