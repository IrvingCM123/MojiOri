import { Usuario } from "./usuario.entity";
import { crearUsuarioDto } from "src/app/dto/usuarios/crear-usuario.dto";
import { actualizarUsuarioDto } from "src/app/dto/usuarios/actualizar-usuario.dto";

export interface UsuarioRepository {
    crearUsuario(usuario: crearUsuarioDto): Promise<Usuario>;
    obtenerUsuarioPorID(usuarioID: number): Promise<Usuario | null>;
    obtenerUsuarioPorUsuario(usuarioUsuario: string): Promise<Usuario | null>;
    obtenerUsuarios(): Promise<Usuario[]> | Promise<null> ;
    actualizarUsuario(usuarioID: number, usuario: actualizarUsuarioDto): Promise<Usuario>;
    eliminarUsuario(usuarioID: number): Promise<void>;
}