import { UsuarioRepository } from "src/core/domain/usuario/usuario.repository";
import { Usuario } from "src/core/domain/usuario/usuario.entity";
import { crearUsuarioDto } from "src/app/dto/usuarios/crear-usuario.dto";
import { actualizarUsuarioDto } from "src/app/dto/usuarios/actualizar-usuario.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { UsuarioEntity } from "../database/usuario.entity.schema";

@Injectable()
export class usuarioRepositoryImpl implements UsuarioRepository {

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>,
    ) { }

    async crearUsuario(usuario: crearUsuarioDto): Promise<Usuario> {
        const nuevoUsuario = this.usuarioRepository.create(usuario);
        return await this.usuarioRepository.save(nuevoUsuario);
    }

    async actualizarUsuario(usuarioID: number, usuario: actualizarUsuarioDto): Promise<Usuario> {
        await this.usuarioRepository.update(usuarioID, usuario);
        return await this.usuarioRepository.findOneById(usuarioID);
    }

    async obtenerUsuarioPorID(id: number): Promise<Usuario> {
        return await this.usuarioRepository.findOne({
            where: {
                'usuarioID': id
            }
        })
    }

    async obtenerUsuarioPorUsuario(usuarioUsuario: string): Promise<Usuario> {
        return await this.usuarioRepository.findOne({
            where: {
                usuarioUsuario: usuarioUsuario
            }
        });
    }

    async obtenerUsuarios(): Promise<Usuario[]> | null {
        return await this.usuarioRepository.find();
    }

    async eliminarUsuario(id: number): Promise<void> {
        await this.usuarioRepository.delete(id);

    }
}