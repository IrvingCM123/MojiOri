import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';
import { mensajesSistema } from 'src/shared/helper/mensajes-generales.helper';

export class actualizarUsuarioDto {
    
    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    usuarioUsuario: string;

    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    usuarioFechaNacimiento: string;

    @IsDate({ message: mensajesSistema.CAMPO_DATE })
    usuarioFechaCreacion: Date;

    @IsDate({ message: mensajesSistema.CAMPO_DATE })
    usuarioFechaActualizacion: Date;
}