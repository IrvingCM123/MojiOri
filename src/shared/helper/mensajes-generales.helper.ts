export enum mensajesSistema {
    CAMPO_STRING = 'El campo $property debe ser de tipo string',
    CAMPO_DATE = 'El campo $property debe ser de tipo date',
    CAMPO_NUMBER = 'El campo $property debe ser de tipo number',
    CAMPO_VACIO = 'El campo $property no puede estar vacío',
    CAMPO_LIMITE_MAXIMO = 'El campo $property excede el límite máximo de $constraint1',
    CAMPO_LIMITE_MINIMO = 'El campo $property no alcanza el límite mínimo de $constraint1',
}