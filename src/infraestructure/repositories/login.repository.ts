import { LoginRepository } from 'src/core/domain/auth/login.repository';
import { Inject, Injectable } from '@nestjs/common';
import { loginDTO } from 'src/app/dto/auth/login.dto';
import { CuentaUseCase } from 'src/core/use-cases/cuenta.use-case';
import * as bcrypt from 'bcrypt';
import { enumEstadoCuenta } from 'src/shared/enums/estado-cuenta.enum';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginRepositoryImpl implements LoginRepository {
    constructor(
        private readonly cuentaUseCase: CuentaUseCase,
        private readonly jwtService: JwtService,
    ) { }

    async iniciarSesion(datosLogin: loginDTO): Promise<any> {
        const cuenta = await this.cuentaUseCase.obtenerCuentaPorTelefono(
            datosLogin.cuentaTelefono,
        );

        if (cuenta === null) {
            return 'La cuenta no existe';
        } else {
            const validarContrasena = await this.validarContrasena(
                datosLogin.cuentaContraseña,
                cuenta.cuentaContrasena,
            );

            if (validarContrasena) {
                const validarPermisos = await this.validarPermisos(cuenta.cuentaEstado);

                if (validarPermisos) { 
                    const payload = { id: cuenta.cuentaID, rol: cuenta.cuentaRol };
                    const accessToken = await this.jwtService.sign(payload);

                    return {
                        token: accessToken,
                        mensaje: 'Inicio de sesión exitoso',
                        status: 200,
                    };
                } else {
                    return 'La cuenta esta desactivada';
                }
            } else {
                return 'La contraseña es incorrecta';
            }
        }
    }

    async validarContrasena(contrasena: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(contrasena, hash);
    }

    async validarPermisos(estado: string): Promise<boolean> {
        if (estado === enumEstadoCuenta.ACTIVO) {
            return true;
        } else {
            return false;
        }
    }
}
