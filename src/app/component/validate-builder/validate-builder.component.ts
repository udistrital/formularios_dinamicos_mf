import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'validate-builder',
  templateUrl: './validate-builder.component.html',
  styleUrls: ['./validate-builder.component.scss']
})
export class ValidateBuilderComponent implements OnInit {
  @Input() validateForm: FormGroup;
  @Input() numero: number;

  agregarValidaciones: boolean = false;

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
      min: 0,
      max: 0
    });
  }

  eliminarValidacion(index: number) {
    this.validaciones.removeAt(index);
  }

}