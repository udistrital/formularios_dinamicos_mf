import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FormularioDinamicoService } from "src/app/services/formulario-dinamico.service";
import { Formulario } from "src/data/models/formulario.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view-formulario-dinamico',
  templateUrl: './view-formulario-dinamico.component.html',
  styleUrls: ['./view-formulario-dinamico.component.scss'],
})
export class ViewFormularioDinamicoComponent implements OnInit {

  formulario: Formulario;
  id: string | null = null;
  nombre: string | null = null;

  constructor(private formularioDinamicoService: FormularioDinamicoService,
    private translate: TranslateService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.nombre = this.route.snapshot.paramMap.get('nombre'); 
    this.loadFormulario(); 
  }

  loadFormulario() {
    if (this.nombre) {
      this.formularioDinamicoService.get(`${this.nombre}`).subscribe((res) => {
        if (res !== null) {
          this.formulario = res;
        }
      });
    } else {
      console.error('No se proporcionó un nombre de formulario válido.');
    }
  }

}