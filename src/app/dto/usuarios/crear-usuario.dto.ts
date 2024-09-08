import { IsNotEmpty, IsString, IsDate, IsNumber, MaxLength } from 'class-validator';
import { mensajesSistema } from 'src/shared/helper/mensajes-generales.helper';

export class crearUsuarioDto {

    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @MaxLength(30, { message: mensajesSistema.CAMPO_LIMITE_MAXIMO })
    usuarioUsuario: string;

    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    usuarioFechaNacimiento: string;

    @IsDate({ message: mensajesSistema.CAMPO_DATE})
    usuarioFechaCreacion: Date;

    @IsDate({ message: mensajesSistema.CAMPO_DATE})
    usuarioFechaActualizacion: Date;

}