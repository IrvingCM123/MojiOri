import { Controller, Post, Body, Get, Put, Delete, Param } from "@nestjs/common";
import { UsuarioUseCase } from "src/core/use-cases/usuario.use-case";
import { crearUsuarioDto } from "src/app/dto/usuarios/crear-usuario.dto";
import { actualizarUsuarioDto } from "src/app/dto/usuarios/actualizar-usuario.dto";

import { Auth } from "src/shared/decorators/auth.decorator";
import { enumRol } from "src/shared/enums/rol.enum";
import { ActiveUser } from "src/shared/decorators/user.decorator";
import { User_Interface } from "src/shared/interface/user.interface";

@Auth(enumRol.ADMINISTRADOR)
@Controller('usuarios')
export class usuarioController {
    
    constructor(private readonly usuarioUseCase: UsuarioUseCase) {}

    @Post()
    async crearUsuario(@Body() usuario: crearUsuarioDto) {
        return this.usuarioUseCase.crearUsuario(usuario);
    }

    @Get()
    async obtenerUsuarios(@ActiveUser() user: User_Interface) {
        return this.usuarioUseCase.obtenerUsuarios(user);
    }

    @Get('/obtenerID/:usuarioID')
    async obtenerUsuarioPorID(@Param('usuarioID') usuarioID: number) {
        return this.usuarioUseCase.obtenerUsuarioPorID(usuarioID);
    }

    @Get('/obtenerUsuario/:usuario')
    async obtenerUsuarioPorUsuario(@Param('usuario') usuario: string) {
        return this.usuarioUseCase.obtenerUsuarioPorUsuario(usuario);
    }

    @Put(':usuarioID')
    async actualizarUsuario(@Param('usuarioID') usuarioID: number, @Body() usuario: actualizarUsuarioDto) {
        return this.usuarioUseCase.actualizarUsuario(usuarioID, usuario);
    }

    @Delete(':usuarioID')
    async eliminarUsuario(usuarioID: number) {
        return this.usuarioUseCase.eliminarUsuario(usuarioID);
    }

}