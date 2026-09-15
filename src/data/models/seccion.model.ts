import { Campo } from "./campo.model";

export class Seccion {
  nombre: string;
  descripcion?: string;
  icono?: string;
  campos: Campo[];
}