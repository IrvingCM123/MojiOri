import { IsNotEmpty, IsString, IsDate, IsNumber, MaxLength } from 'class-validator';
import { UsuarioEntity } from 'src/infraestructure/database/usuario.entity.schema';
import { enumRol } from 'src/shared/enums/rol.enum';
import { mensajesSistema } from 'src/shared/helper/mensajes-generales.helper';

export class crearCuentaDto {

    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @IsNumber({}, { message: mensajesSistema.CAMPO_NUMBER })
    usuarioID: number;
    
    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @MaxLength(12, { message: mensajesSistema.CAMPO_LIMITE_MAXIMO })
    cuentaTelefono: string;

    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @IsString({ message: mensajesSistema.CAMPO_STRING })
    @MaxLength(255, { message: mensajesSistema.CAMPO_LIMITE_MAXIMO })
    cuentaContrasena: string;

    @IsNotEmpty({ message: mensajesSistema.CAMPO_VACIO })
    @IsString({ message: mensajesSistema.CAMPO_STRING })
    cuentaRol: enumRol;
    
}