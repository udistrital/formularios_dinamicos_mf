import { FormParams } from "../../../@core/data/models/define-form-fields";

export let FORM_PLAN_ESTUDIO: FormParams = {
    "nivel": {
        label_i18n: 'GLOBAL.nivel',
        placeholder_i18n: 'GLOBAL.placeholder_nivel',
        tipo: 'select',
        tipoDato: 'text',
        requerido: true,
        soloLectura: false,
        valor: undefined,
        claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
        opciones: [],
        notificar: true,
    },
    "subnivel": {
        label_i18n: 'GLOBAL.subnivel',
        placeholder_i18n: 'GLOBAL.placeholder_nivel',
        tipo: 'select',
        tipoDato: 'text',
        requerido: true,
        soloLectura: false,
        valor: undefined,
        claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
        opciones: [],
        notificar: true,
    },
    "proyectoCurriular": {
        label_i18n: 'GLOBAL.proyecto_academico',
        placeholder_i18n: 'GLOBAL.placeholder_proyecto_academico',
        tipo: 'select',
        tipoDato: 'text',
        requerido: true,
        soloLectura: false,
        valor: undefined,
        claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
        opciones: [],
        notificar: true,
    },
    "codigoProyecto": {
        label_i18n: 'plan_estudios.codigo_proyecto',
        placeholder_i18n: 'plan_estudios.codigo_proyecto',
        tipo: 'input',
        tipoDato: 'text',
        requerido: false,
        soloLectura: true,
        valor: undefined,
        claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
    },
    "codigoPlanEstudio": {
        label_i18n: 'plan_estudios.codigo_plan',
        placeholder_i18n: 'plan_estudios.codigo_plan',
        tipo: 'input',
        tipoDato: 'text',
        requerido: true,
        soloLectura: false,
        valor: undefined,
        claseGrid: 'col-lg-4 col-md-4 col-sm-12 col-xs-12',
    },
    "totalCreditosPrograma": {
        label_i18n: 'plan_estudios.total_creditos',
        placeholder_i18n: 'plan_estudios.placeholder_total_creditos',
        tipo: 'input',
        tipoDato: 'number',
        minimo: 1,
        requerido: true,
        soloLectura: false,
        valor: undefined,
        claseGrid: 'col-lg-4 col-md-4 col-sm-12 col-xs-12',
    },
    "numeroSemestres": {
        label_i18n: 'plan_estudios.numero_semestres',
        placeholder_i18n: 'plan_estudios.placeholder_numero_semestres',
        tipo: 'input',
        tipoDato: 'number',
        minimo: 1,
        requerido: true,
        soloLectura: false,
        valor: undefined,
        claseGrid: 'col-lg-4 col-md-4 col-sm-12 col-xs-12',
    },
    "numeroResolucion": {
        label_i18n: 'plan_estudios.numero_resolucion',
        placeholder_i18n: 'plan_estudios.numero_resolucion',
        tipo: 'input',
        tipoDato: 'number',
        minimo: 0,
        requerido: true,
        soloLectura: false,
        valor: undefined,
        claseGrid: 'col-lg-4 col-md-4 col-sm-12 col-xs-12',
    },
    "anioResolucion": {
        label_i18n: 'plan_estudios.anio_resolucion',
        placeholder_i18n: 'plan_estudios.anio_resolucion',
        tipo: 'input',
        tipoDato: 'number',
        minimo: 1900,
        requerido: true,
        soloLectura: false,
        valor: undefined,
        claseGrid: 'col-lg-4 col-md-4 col-sm-12 col-xs-12',
    },
    "soportes": {
        label_i18n: 'plan_estudios.soporte_plan',
        placeholder_i18n: 'plan_estudios.placeholder_soporte_plan',
        tipo: 'fileMultiple',
        tipoDato: '',
        tipoArchivos: 'pdf',
        tamMBArchivos: 2,
        requerido: true,
        soloLectura: false,
        valor: undefined,
        claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
        archivosLocal: [],
        archivosLinea: [],
        archivosDelete: [],
        validaArchivos: {errTipo: false, errTam: false},
    }
}