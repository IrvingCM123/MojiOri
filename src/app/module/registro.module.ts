import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/shared/constants/jwt.constant';
import { RegistroController } from 'src/infraestructure/controllers/registro.controller';

import { UsuarioModule } from './usuario.module';
import { CuentaModule } from './cuenta.module';
import { RegistroUseCase } from 'src/core/use-cases/registro.use-case';
import { RegistroService } from '../services/registro.service';
import { RegistroRepositoyImpl } from 'src/infraestructure/repositories/registro.repository';

@Module({
  imports: [
    JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1d' },
      }),
      UsuarioModule,
      CuentaModule
  ],
  controllers: [RegistroController],
  exports: [
    RegistroUseCase,
    RegistroService
  ],
  providers: [
    RegistroUseCase,
    RegistroService,
    {
      provide: 'RegistroRepository',
      useClass: RegistroRepositoyImpl
    }
  ],
})
export class RegistroModule {}
