import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, IsDate, IsNumber, MaxLength } from 'class-validator';
import { mensajesSistema } from "src/shared/helper/mensajes-generales.helper";

export class loginDTO {

    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @MaxLength(30, { message: mensajesSistema.CAMPO_LIMITE_MAXIMO })
    usuarioUsuario: string;

    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @MaxLength(12, { message: mensajesSistema.CAMPO_LIMITE_MAXIMO })
    cuentaTelefono: string;

    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @MaxLength(30, { message: mensajesSistema.CAMPO_LIMITE_MAXIMO })
    @Transform(({ value }) => value.trim())
    cuentaContraseña: string;

}