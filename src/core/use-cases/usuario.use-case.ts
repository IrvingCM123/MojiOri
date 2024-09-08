import { UsuarioRepository } from "../domain/usuario/usuario.repository";
import { Usuario } from "../domain/usuario/usuario.entity";
import { crearUsuarioDto } from "src/app/dto/usuarios/crear-usuario.dto";
import { actualizarUsuarioDto } from "src/app/dto/usuarios/actualizar-usuario.dto";
import { Inject, Injectable } from "@nestjs/common";
import { validarAdmin } from "src/app/guard/validateRole.guard";
import { User_Interface } from "src/shared/interface/user.interface";

@Injectable()
export class UsuarioUseCase {

    constructor(
        @Inject('UsuarioRepository')
        private readonly usuarioRepository: UsuarioRepository,
    ) {}

    async crearUsuario(usuario: crearUsuarioDto): Promise<Usuario> {
        return this.usuarioRepository.crearUsuario(usuario);
    }

    async obtenerUsuarioPorID(usuarioID: number): Promise<Usuario | null> {
        return this.usuarioRepository.obtenerUsuarioPorID(usuarioID);
    }

    async obtenerUsuarioPorUsuario(usuarioUsuario: string): Promise<Usuario | null> {
        return this.usuarioRepository.obtenerUsuarioPorUsuario(usuarioUsuario);
    }

    async obtenerUsuarios(user: User_Interface): Promise<Usuario[]> {
        await validarAdmin(user);
        return this.usuarioRepository.obtenerUsuarios();
    }

    async actualizarUsuario(usuarioID: number, usuario: actualizarUsuarioDto): Promise<Usuario> {
        return this.usuarioRepository.actualizarUsuario(usuarioID, usuario);
    }

    async eliminarUsuario(usuarioID: number): Promise<void> {
        return this.usuarioRepository.eliminarUsuario(usuarioID);
    }
}