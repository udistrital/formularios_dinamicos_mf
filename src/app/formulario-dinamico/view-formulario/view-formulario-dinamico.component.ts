import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'view-formulario-dinamico',
    templateUrl: './view-formulario-dinamico.component.html',
    styleUrls: ['./view-formulario-dinamico.component.scss'],
})
export class ViewFormularioDinamicoComponent implements OnInit {

  formulario = {
    campos: [
      {
        nombre: 'nombre',
        descripcion: 'Nombre del usuario',
        etiqueta: 'Nombre',
        tipo: 'text',
        placeholder: 'Escriba aquí su nombre',
        deshabilitado: false,
        validaciones: { requerido: true, maxLength: 15 }
      },
      {
        nombre: 'apellidos',
        etiqueta: 'Apellidos',
        tipo: 'text',
        valor: 'Valor por default',
        deshabilitado: true,
        validaciones: { requerido: true }
      },
      {
        nombre: 'nickname',
        etiqueta: 'Nickname',
        tipo: 'text',
        valor: 'tunick',
        deshabilitado: false,
        validaciones: { requerido: true }
      },
      {
        nombre: 'email',
        etiqueta: 'Correo Electrónico',
        tipo: 'email',
        placeholder: 'Ex. pat@example.com',
        deshabilitado: false,
        validaciones: { requerido: true, email: true }
      },
      {
        nombre: 'edad',
        etiqueta: 'Edad',
        tipo: 'number',
        deshabilitado: false,
        validaciones: { requerido: true, min: 18, max: 65 }
      },
      {
        nombre: 'genero',
        etiqueta: 'Género',
        tipo: 'select',
        deshabilitado: false,
        opciones: [
          { valor: 'masculino', etiqueta: 'Masculino' },
          { valor: 'femenino', etiqueta: 'Femenino' },
          { valor: "otro", etiqueta: "Otro", deshabilitado: true }
        ],
        validaciones: { requerido: true }
      },
      {
        nombre: 'preferencia_contacto',
        etiqueta: 'Preferencia de Contacto',
        tipo: 'radiobutton',
        opciones: [
          { valor: 'email', etiqueta: 'Correo Electrónico' },
          { valor: 'telefono', etiqueta: 'Teléfono' },
          { valor: 'sms', etiqueta: 'SMS', deshabilitado: true },
          { valor: 'whatsapp', etiqueta: 'Whatsapp' }
        ],
        validaciones: { requerido: true },
        deshabilitado: false
      },
      {
        nombre: 'aceptar_terminos',
        etiqueta: 'Aceptar Términos',
        tipo: 'checkbox',
        deshabilitado: false,
        validaciones: { requerido: true }
      },
      {
        nombre: 'fecha_nacimiento',
        etiqueta: 'Fecha de Nacimiento',
        tipo: 'date',
        validaciones: { requerido: true },
        deshabilitado: false,
        vista: "year"
      },
      {
        nombre: 'icon',
        etiqueta: 'Etiqueta icono',
        tipo: "icono",
        icono: "home"
      },
      {
        nombre: 'fecha_registro',
        etiqueta: 'Fecha de Registro',
        tipo: 'date',
        validaciones: { requerido: true },
        deshabilitado: false
      },
      {
        nombre: 'fecha_experiencia',
        etiqueta: 'Rango de fechas',
        etiqueta_inicio: 'Fecha inicio',
        etiqueta_fin: 'Fecha fin',
        tipo: 'date-range',
        validaciones: { requerido: true },
        deshabilitado: false
      },
      {
        nombre: 'observaciones',
        etiqueta: 'Observaciones',
        tipo: 'textarea',
        validaciones: { requerido: false },
        deshabilitado: false
      }
    ]
  };

  ngOnInit(): void {
    
  }

}