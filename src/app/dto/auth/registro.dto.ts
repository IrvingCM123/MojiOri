import { Transform } from "class-transformer";
import { enumRol } from "src/shared/enums/rol.enum";
import { enumEstadoCuenta } from "src/shared/enums/estado-cuenta.enum";
import { IsNotEmpty, IsString, IsDate, IsNumber, MaxLength } from 'class-validator';
import { mensajesSistema } from "src/shared/helper/mensajes-generales.helper";

export class registroDTO {

    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @MaxLength(30, { message: mensajesSistema.CAMPO_LIMITE_MAXIMO })
    usuarioUsuario: string;

    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    usuarioFechaNacimiento: string;

    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @MaxLength(12, { message: mensajesSistema.CAMPO_LIMITE_MAXIMO })
    cuentaTelefono: string;

    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @MaxLength(30, { message: mensajesSistema.CAMPO_LIMITE_MAXIMO })
    @Transform(({ value }) => value.trim())
    cuentaContraseña: string;

    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @IsString({ message: mensajesSistema.CAMPO_STRING })
    cuentaRol: enumRol;

}