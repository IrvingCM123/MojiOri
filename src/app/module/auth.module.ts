import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/shared/constants/jwt.constant';
import { LoginController } from 'src/infraestructure/controllers/login.controller';

import { UsuarioModule } from './usuario.module';
import { CuentaModule } from './cuenta.module';
import { LoginUseCase } from 'src/core/use-cases/login.use-case';
import { LoginService } from '../services/login.service';
import { LoginRepositoryImpl } from 'src/infraestructure/repositories/login.repository';

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
  controllers: [LoginController],
  exports: [
    LoginUseCase,
    LoginService,
  ],
  providers: [
    LoginUseCase,
    LoginService,
    {
      provide: 'LoginRepository',
      useClass: LoginRepositoryImpl,
    }
  ],
})
export class AuthModule {}
