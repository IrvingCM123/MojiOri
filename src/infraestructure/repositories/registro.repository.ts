import { RegistroRepository } from "src/core/domain/auth/registro.repository";
import { Injectable } from '@nestjs/common';
import { registroDTO } from "src/app/dto/auth/registro.dto";
import { CuentaUseCase } from "src/core/use-cases/cuenta.use-case";
import { UsuarioUseCase } from "src/core/use-cases/usuario.use-case";

@Injectable()
export class RegistroRepositoyImpl implements RegistroRepository {

    constructor(
        private readonly cuentaUseCase: CuentaUseCase,
        private readonly usuarioUseCase: UsuarioUseCase
    ) {}

    async crearNuevoCuenta(datosRegistro: registroDTO): Promise<any> {
        
        const informacionUsuario = {
            usuarioUsuario: datosRegistro.usuarioUsuario,
            usuarioFechaNacimiento: datosRegistro.usuarioFechaNacimiento,
            usuarioFechaCreacion: new Date(),
            usuarioFechaActualizacion: new Date(),
        }

        const nuevoUsuario = await this.usuarioUseCase.crearUsuario(informacionUsuario);

        const informacionCuenta = {
            usuarioID: nuevoUsuario.usuarioID,
            cuentaTelefono: datosRegistro.cuentaTelefono,
            cuentaContrasena: datosRegistro.cuentaContraseña,
            cuentaRol: datosRegistro.cuentaRol,
        }

        const nuevaCuenta = await this.cuentaUseCase.crearCuenta(informacionCuenta)

        if (nuevaCuenta === null) {
            return 'La cuenta ya existe'
        } else {
            return nuevaCuenta
        }

    }

}