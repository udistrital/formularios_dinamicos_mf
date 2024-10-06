import { Component, OnInit  } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { FormularioDinamicoService } from "src/app/services/formulario-dinamico.service";
import { Formulario } from "src/data/models/formulario.model";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-info-formulario-dinamico',
  templateUrl: './edit-info-formulario-dinamico.component.html',
  styleUrl: './edit-info-formulario-dinamico.component.scss'
})
export class EditInfoFormularioDinamicoComponent implements OnInit {

  formulario: Formulario;
  id: string | null = null;
  nombre: string | null = null;

  constructor(private formularioDinamicoService: FormularioDinamicoService,
    private translate: TranslateService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.nombre = this.route.snapshot.paramMap.get('nombre'); 
    this.loadFormulario(); 
  }

  loadFormulario() {
    if (this.nombre) {
      this.formularioDinamicoService.get(`${this.nombre}/${this.id}`).subscribe((res) => {
        if (res !== null) {
          this.formulario = res;
        }
      });
    } else {
      console.error('No se proporcionó un nombre de formulario válido.');
    }
  }

}
