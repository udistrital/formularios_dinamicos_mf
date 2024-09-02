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

  constructor(private fb: FormBuilder, private translate: TranslateService) { }

  ngOnInit(): void { }

}