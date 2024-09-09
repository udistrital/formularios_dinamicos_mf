export class TiposValidaciones {
    public static readonly opciones: Array<{ value: string, label: string }> = [
      { value: 'requerido', label: 'validacion.requerido' },
      { value: 'minLength', label: 'validacion.minLength' },
      { value: 'maxLength', label: 'validacion.maxLength' },
      { value: 'min', label: 'validacion.min' },
      { value: 'max', label: 'validacion.max' },
      { value: 'email', label: 'validacion.email' },
    ];
  }