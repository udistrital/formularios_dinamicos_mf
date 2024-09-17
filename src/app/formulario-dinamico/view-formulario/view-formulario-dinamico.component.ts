import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FormularioDinamicoService } from "src/app/services/formulario-dinamico.service";
import { Formulario } from "src/data/models/formulario.model";

@Component({
    selector: 'view-formulario-dinamico',
    templateUrl: './view-formulario-dinamico.component.html',
    styleUrls: ['./view-formulario-dinamico.component.scss'],
})
export class ViewFormularioDinamicoComponent implements OnInit {

  formulario: Formulario;

  constructor(private formularioDinamicoService: FormularioDinamicoService,
    private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.formularioDinamicoService.get('').subscribe((res) => {
      if (res !== null) {
        this.formulario = res;
      }
    });
  }

}