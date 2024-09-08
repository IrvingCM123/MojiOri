import { Module } from '@nestjs/common';
import { usuarioController } from 'src/infraestructure/controllers/usuario.controller';
import { UsuarioUseCase } from 'src/core/use-cases/usuario.use-case';
import { usuarioService } from '../services/usuario.service';
import { usuarioRepositoryImpl } from 'src/infraestructure/repositories/usuario.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/infraestructure/database/usuario.entity.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [usuarioController],
  providers: [
    usuarioService,
    UsuarioUseCase,
    {
      provide: 'UsuarioRepository',
      useClass: usuarioRepositoryImpl,
    },
  ],
  exports: [UsuarioUseCase, usuarioService],
})
export class UsuarioModule {}
