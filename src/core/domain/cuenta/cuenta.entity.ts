import { UsuarioEntity } from "src/infraestructure/database/usuario.entity.schema";
import { enumEstadoCuenta } from "src/shared/enums/estado-cuenta.enum";
import { enumRol } from "src/shared/enums/rol.enum";

export class Cuenta {
    constructor(
        public readonly cuentaID: number,
        public readonly usuarioID: UsuarioEntity | number,
        public readonly cuentaTelefono: string,
        public readonly cuentaContrasena: string,
        public readonly cuentaRol: enumRol,
        public readonly cuentaNumeroActivacion: number,
        public readonly cuentaCodigoRecuperacion: number,
        public readonly cuentaFechaRegistro: Date,
        public readonly cuentaEstado: enumEstadoCuenta,
        public readonly cuentaVerificacionFecha: Date,
    ) {}
}