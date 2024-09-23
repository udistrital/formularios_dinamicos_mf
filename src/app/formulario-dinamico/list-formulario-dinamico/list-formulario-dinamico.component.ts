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
import { CrudFormularioDinamicoService } from "src/app/services/crud-formulario-dinamico.service";
import { Router } from "@angular/router";

@Component({
  selector: 'list-formulario-dinamico',
  templateUrl: './list-formulario-dinamico.component.html',
  styleUrls: ['./list-formulario-dinamico.component.scss'],
})
export class ListFormularioDinamicoComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  showTable: boolean = false
  existeFormulario = true
  periodos: [] = []
  modulos: [] = []
  myForm: FormGroup;
  options: string[] = ['SGA', 'SISIFO', 'IDEXUD'];
  displayedColumns: string[] = ['id', 'nombre', 'version', 'opciones'];
  formularios = []

  dataSource = new MatTableDataSource([[]]);

  constructor(
    private fb: FormBuilder,
    private parametrosService: ParametrosService,
    private formularioDinamicoService: FormularioDinamicoService,
    private crudFormularioDinamicoService: CrudFormularioDinamicoService,
    private router: Router,
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

      this.CargarPlantillas(this.myForm.get('selectPeriodo')?.value, this.myForm.get('selectModulo')?.value)

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

  CargarModulos() {
    this.crudFormularioDinamicoService.get('modulos').subscribe((res) => {
      if (res !== null) {
        this.modulos = res.Data
      }
    })
  }

  CargarPlantillas(periodo_id: string, modulo_id: string) {
    this.crudFormularioDinamicoService.get(`plantillas?query=periodo_id:${periodo_id},modulo_id:${modulo_id}`).subscribe((res) => {
      if (res.Data !== null && res.Data.lenght > 0) {
        console.log(res.Data)
        this.formularios = res.Data
        this.dataSource = new MatTableDataSource([res.Data[0]]);
        this.showTable = true
        this.existeFormulario = true
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
      }else {
        this.existeFormulario = false
      }
    })
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
    this.dialog.open(ListVersionesComponent, {
      data: this.formularios,
      height: '80%',
      width: '80%',
    })
  }

  DialogVisualizarVersion(formulario: Formulario) {
    this.dialog.open(ViewVersionComponent, {
      data: formulario,
      height: '80%',
      width: '80%',
    })
  }

  DialogEditarVersion(id_fomulario: number) {
    console.log(id_fomulario)
    this.formularioDinamicoService.get('').subscribe((res) => {
      if (res !== null) {
        this.dialog.open(EditarFormularioComponent, {
          data: res,
          height: '80%',
          width: '80%',
        })
      }
    });
  }

  CrearPlantilla(){
    this.router.navigate(['/crud-formulario'])
  }

  ngOnInit() {
    this.CargarPeriodos()
    this.CargarModulos()
  }
}