import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'list-formulario-dinamico',
  templateUrl: './list-formulario-dinamico.component.html',
  styleUrls: ['./list-formulario-dinamico.component.scss'],
})
export class ListFormularioDinamicoComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  showTable: boolean = false
  myForm: FormGroup;
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  displayedColumns: string[] = ['id', 'nombre', 'version', 'opciones'];
  dataSource = new MatTableDataSource([{
    id: 1,
    nombre: "asd",
    opciones: "opcion 1",
    version: 1
  },
  {
    id: 2,
    nombre: "asdfe",
    opciones: "opcion 2",
    version: 2
  },
  {
    id: 3,
    nombre: "juas",
    opciones: "opcion 3",
    version: 3
  }]);


  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      select1: ['', Validators.required],
      select2: ['', Validators.required]
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
  ngOnInit() {

  }
}