import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'field-builder',
  templateUrl: './field-builder.component.html',
  styleUrls: ['./field-builder.component.scss']
})
export class FieldBuilderComponent implements OnInit {
  @Input() campoForm: FormGroup;

  constructor(private fb: FormBuilder, private translate: TranslateService) {}

  ngOnInit(): void {}

  agregarOpcion() {
    (this.campoForm.get('opciones') as FormArray).push(this.fb.control(''));
  }
}
