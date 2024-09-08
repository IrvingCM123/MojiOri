import { Injectable } from "@nestjs/common";
import { User_Interface } from "src/shared/interface/user.interface";
import { UsuarioUseCase } from "src/core/use-cases/usuario.use-case";

@Injectable()
export class usuarioService {

    constructor(private readonly usuarioUseCase: UsuarioUseCase) {}

    async crearUsuario(usuario) {
        return this.usuarioUseCase.crearUsuario(usuario);
    }

    async obtenerUsuarios(user: User_Interface) {
        return this.usuarioUseCase.obtenerUsuarios(user);
    }

    async obtenerUsuarioPorID(usuarioID: number) {
        return this.usuarioUseCase.obtenerUsuarioPorID(usuarioID);
    }

    async obtenerUsuarioPorUsuario(usuarioUsuario: string) {
        return this.usuarioUseCase.obtenerUsuarioPorUsuario(usuarioUsuario);
    }

    async actualizarUsuario(usuarioID: number, usuario) {
        return this.usuarioUseCase.actualizarUsuario(usuarioID, usuario);
    }

    async eliminarUsuario(usuarioID: number) {
        return this.usuarioUseCase.eliminarUsuario(usuarioID);
    }

}