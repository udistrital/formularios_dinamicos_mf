import { Component, OnInit } from "@angular/core";
import { FormularioDinamicoService } from "src/data/formulario-dinamico.service";

@Component({
    selector: 'view-formulario-dinamico',
    templateUrl: './view-formulario-dinamico.component.html',
    styleUrls: ['./view-formulario-dinamico.component.scss'],
})
export class ViewFormularioDinamicoComponent implements OnInit {

  formulario: any;

  constructor(private formularioDinamicoService: FormularioDinamicoService) {

  }

  ngOnInit(): void {
    this.formularioDinamicoService.get('build_dynamic_form').subscribe((res) => {
      if (res !== null) {
        this.formulario = res;
        console.log(JSON.stringify(this.formulario, null, 2));
      }
    });
  }

}