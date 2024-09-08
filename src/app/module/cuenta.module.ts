import { Module } from '@nestjs/common';
import { CuentaController } from 'src/infraestructure/controllers/cuenta.controller';
import { CuentaUseCase } from 'src/core/use-cases/cuenta.use-case';
import { CuentaService } from '../services/cuenta.service';
import { CuentaRepositoryImpl } from 'src/infraestructure/repositories/cuenta.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentaEntity } from 'src/infraestructure/database/cuenta.entity,schema';
import { UsuarioEntity } from 'src/infraestructure/database/usuario.entity.schema';
import { UsuarioModule } from './usuario.module';

@Module({
    imports: [TypeOrmModule.forFeature([CuentaEntity, UsuarioEntity]), UsuarioModule],
    controllers: [CuentaController],
    providers: [
        CuentaService,
        CuentaUseCase,
        {
            provide: 'CuentaRepository',
            useClass: CuentaRepositoryImpl,
        },
    ],
    exports: [
        CuentaUseCase, 
        CuentaService,
        {
            provide: 'CuentaRepository',
            useClass: CuentaRepositoryImpl,
        },
    ],
})
export class CuentaModule { }
