import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../_guards/auth.guard";
import { FormularioDinamicoComponent } from "./formulario-dinamico.component";
import { ListFormularioDinamicoComponent } from "./list-formulario-dinamico/list-formulario-dinamico.component";
import { CrudFormularioDinamicoComponent } from "./crud-formulario-dinamico/crud-formulario-dinamico.component";
import { ViewFormularioDinamicoComponent } from "./view-formulario/view-formulario-dinamico.component";
import { EditInfoFormularioDinamicoComponent } from "./edit-info-formulario-dinamico/edit-info-formulario-dinamico.component";

const routes: Routes = [{
    path: '',
    component: FormularioDinamicoComponent,
    children: [
        {
            path: "list-formulario",
            component: ListFormularioDinamicoComponent,
            //canActivate: [AuthGuard],
          },
          {
            path: "crud-formulario",
            component: CrudFormularioDinamicoComponent,
            //canActivate: [AuthGuard],
          },
          {
            path: "view-formulario/:nombre",
            component: ViewFormularioDinamicoComponent,
            //canActivate: [AuthGuard],
          },
          {
            path: "editInfo-formulario/:nombre/:id",
            component: EditInfoFormularioDinamicoComponent,
            //canActivate: [AuthGuard],
          },
    ]
}]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class FormularioDinamicoRoutingModule { }

export const routedComponents = [
    FormularioDinamicoComponent,
    ListFormularioDinamicoComponent,
    CrudFormularioDinamicoComponent,
    ViewFormularioDinamicoComponent,
    EditInfoFormularioDinamicoComponent
]