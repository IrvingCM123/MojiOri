export class Usuario {
    constructor(
        public readonly usuarioID: number,
        public readonly usuarioUsuario: string,
        public readonly usuarioFechaNacimiento: string,
        public readonly usuarioFechaCreacion: Date,
        public readonly usuarioFechaActualizacion: Date,
    ) {}
}