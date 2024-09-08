import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';
import { UsuarioEntity } from 'src/infraestructure/database/usuario.entity.schema';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';
import { CuentaEntity } from 'src/infraestructure/database/cuenta.entity,schema';

export const getTypeOrmModuleOptions = (
    envConfigService: EnvironmentConfigService,
): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: envConfigService.getHostBaseDatos(),
    port: envConfigService.getPuertoBaseDatos(),
    username: envConfigService.getUsuarioBaseDatos(),
    password: envConfigService.getContraseñaBaseDatos(),
    database: envConfigService.getNombreBaseDatos(),
    entities: [
        UsuarioEntity,
        CuentaEntity,
    ],
    synchronize: true,
    extra: {
        ssl: false,
        sslmode: 'require',
    } as TypeOrmModuleOptions,
});

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [EnvironmentConfigModule],
            inject: [EnvironmentConfigService],
            useFactory: getTypeOrmModuleOptions,
        }),
    ],
})

export class TypeOrmConfigModule {}
