import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ParametrosService } from "src/app/services/parametros.service";
import { MatDialog } from "@angular/material/dialog";
import { ListVersionesComponent } from "./list-versiones/list-versiones.component";
import { Formulario } from "src/data/models/formulario.model";
import { ViewVersionComponent } from "./view-version/view-version.component";
import { FormularioDinamicoService } from "src/app/services/formulario-dinamico.service";
import { EditarFormularioComponent } from "./editar-formulario/editar-formulario.component";

@Component({
  selector: 'list-formulario-dinamico',
  templateUrl: './list-formulario-dinamico.component.html',
  styleUrls: ['./list-formulario-dinamico.component.scss'],
})
export class ListFormularioDinamicoComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  showTable: boolean = false
  periodos: [] = []
  myForm: FormGroup;
  options: string[] = ['SGA', 'SISIFO', 'IDEXUD'];
  displayedColumns: string[] = ['id', 'nombre', 'version', 'opciones'];
  formularios = [{
    id: 1,
    nombre: "Caracterización",
    version: 1
  },
  {
    id: 2,
    nombre: "Caracterización editada",
    version: 2
  },
  {
    id: 3,
    nombre: "Caracterización final",
    version: 3
  }]

  dataSource = new MatTableDataSource(this.formularios);

  constructor(
    private fb: FormBuilder,
    private parametrosService: ParametrosService,
    private formularioDinamicoService: FormularioDinamicoService,
    public dialog: MatDialog
  ) {
    this.myForm = this.fb.group({
      selectSistema: ['', Validators.required],
      selectModulo: ['', Validators.required],
      selectPeriodo: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Formulario válido', this.myForm.value);
      this.showTable = true

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    } else {
      console.log('Formulario inválido');
    }
  }

  CargarPeriodos() {
    this.parametrosService.get('periodo?query=CodigoAbreviacion:PA&sortby=Id&order=desc&limit=0').subscribe((res) => {
      if (res !== null) {
        this.periodos = res.Data;
        console.log(res.Data)
      }
    });
  }

  CargarFormulario(id_fomulario: number) {
    console.log(id_fomulario)
    this.formularioDinamicoService.get('').subscribe((res) => {
      if (res !== null) {
        this.DialogVisualizarVersion(res)
      }
    });
  }

  DialogListarVersiones(): void {
    let dialogListar = this.dialog.open(ListVersionesComponent, {
      data: this.formularios,
      height: '400px',
      width: '600px',
    })
  }

  DialogVisualizarVersion(formulario: Formulario){
    let dialogListar = this.dialog.open(ViewVersionComponent, {
      data: formulario,
      height: '400px',
      width: '600px',
    })
  }

  DialogEditarVersion(id_fomulario: number) {
    console.log(id_fomulario)
    this.formularioDinamicoService.get('').subscribe((res) => {
      if (res !== null) {
        this.dialog.open(EditarFormularioComponent, {
          data: res,
          height: '400px',
          width: '600px',
        })
      }
    });
  }

  ngOnInit() {
    this.CargarPeriodos()
  }
}