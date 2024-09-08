import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigModule } from './infraestructure/config/typeorm/getTypeOrm.module';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './app/module/usuario.module';
import { EnvironmentConfigModule } from './infraestructure/config/environment-config/environment-config.module';
import { CuentaModule } from './app/module/cuenta.module';
import { WhatsAppModule } from './app/module/whatsapp.module';
import { AuthModule } from './app/module/auth.module';
import { RegistroModule } from './app/module/registro.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    UsuarioModule,
    EnvironmentConfigModule,
    TypeOrmConfigModule,
    CuentaModule,
    WhatsAppModule,
    AuthModule,
    RegistroModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
