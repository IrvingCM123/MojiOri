import { IsNotEmpty, IsString, IsDate, IsNumber, MaxLength } from 'class-validator';
import { enumEstadoCuenta } from 'src/shared/enums/estado-cuenta.enum';
import { enumRol } from 'src/shared/enums/rol.enum';
import { mensajesSistema } from 'src/shared/helper/mensajes-generales.helper';

export class actualizarCuentaDto {
    
    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @MaxLength(12, { message: mensajesSistema.CAMPO_LIMITE_MAXIMO })
    cuentaTelefono: string;

    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @MaxLength(255, { message: mensajesSistema.CAMPO_LIMITE_MAXIMO })
    cuentaContraseña: string;

    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @IsString({ message: mensajesSistema.CAMPO_STRING })
    cuentaRol: enumRol;

    @IsNumber({}, { message: mensajesSistema.CAMPO_NUMBER })
    cuentaNumeroActivacion: number;

    @IsNumber({}, { message: mensajesSistema.CAMPO_NUMBER })
    cuentaCodigoActivacion: number;

    @IsString({ message: mensajesSistema.CAMPO_STRING })
    cuentaEstado: enumEstadoCuenta;

    @IsDate({ message: mensajesSistema.CAMPO_DATE })
    cuentaVerificacionFecha: Date;
    
}