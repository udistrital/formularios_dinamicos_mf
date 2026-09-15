import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'crud-formulario-dinamico',
    templateUrl: './crud-formulario-dinamico.component.html',
    styleUrls: ['./crud-formulario-dinamico.component.scss'],
})
export class CrudFormularioDinamicoComponent implements OnInit {

  constructor(private translate: TranslateService) {

  }

  ngOnInit() {

  }
}