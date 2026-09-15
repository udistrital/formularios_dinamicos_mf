export class Campo {
  nombre: string;
  descripcion?: string;
  etiqueta: any;
  etiqueta_inicio?: string;
  etiqueta_fin?: string;
  tipo: string;
  placeholder?: string;
  validaciones?: any;
  parametros?: {
    url?: string;
    opciones?: Array<{ valor: string; etiqueta: string; deshabilitado?: boolean }>;
    vista?: string;
    fecha_inicio?: string;
  };
  deshabilitado?: boolean;
  valor?: any;
  servicio?: string; 
  endpoint?: string; 
  campo?: string; 
  agrupado?: boolean; 
}