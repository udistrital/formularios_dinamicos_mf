export class Campo {
  nombre: string;
  descripcion?: string;
  etiqueta: any;
  etiqueta_inicio?: string;
  etiqueta_fin?: string;
  tipo: string;
  placeholder?: string;
  url?: string;
  opciones?: Array<{ valor: string; etiqueta: string; deshabilitado?: boolean }>;
  validaciones?: any;
  parametros?: any;
  deshabilitado?: boolean;
  valor?: any;
  vista?: string;
  fecha_inicio?: string;
}