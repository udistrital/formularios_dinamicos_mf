export class TiposCampos {
  public static readonly opciones: Array<{ value: string, label: string }> = [
    { value: 'text', label: 'tipos.text' },
    { value: 'email', label: 'tipos.email' },
    { value: 'number', label: 'tipos.number' },
    { value: 'select', label: 'tipos.select' },
    { value: 'radiobutton', label: 'tipos.radiobutton' },
    { value: 'checkbox', label: 'tipos.checkbox' },
    { value: 'date', label: 'tipos.date' },
    { value: 'date-range', label: 'tipos.date-range' },
    { value: 'icono', label: 'tipos.icono' },
    { value: 'textarea', label: 'tipos.textarea' }
  ];
}