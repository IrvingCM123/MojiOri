import { enumRol } from "src/shared/enums/rol.enum";
import { enumEstadoCuenta } from "src/shared/enums/estado-cuenta.enum";
import { UsuarioEntity } from "src/infraestructure/database/usuario.entity.schema";

export class Registro {
    constructor(
        public readonly usuarioID: UsuarioEntity,
        public readonly usuarioUsuario: string,
        public readonly usuarioFechaNacimiento: string,
        public readonly usuarioFechaCreacion: Date,
        public readonly usuarioFechaActualizacion: Date,
        public readonly cuentaID: number,
        public readonly cuentaTelefono: string,
        public readonly cuentaContrasena: string,
        public readonly cuentaRol: enumRol,
        public readonly cuentaNumeroActivacion: number,
        public readonly cuentaCodigoRecuperacion: number,
        public readonly cuentaFechaRegistro: Date,
        public readonly cuentaEstado: enumEstadoCuenta,
        public readonly cuentaVerificacionFecha: Date,
    ) { }
}