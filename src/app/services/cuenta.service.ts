import { Injectable } from '@nestjs/common';
import { CuentaUseCase } from 'src/core/use-cases/cuenta.use-case';

@Injectable()
export class CuentaService {

    constructor(private readonly cuentaUseCase: CuentaUseCase) {}

    async crearCuenta(cuenta) {
        return this.cuentaUseCase.crearCuenta(cuenta);
    }

    async obtenerCuentas() {
        return this.cuentaUseCase.obtenerCuentas();
    }

    async obtenerCuentaPorID(cuentaID: number) {
        return this.cuentaUseCase.obtenerCuentaPorID(cuentaID);
    }

    async obtenerCuentaPorTelefono(telefono: string) {
        return this.cuentaUseCase.obtenerCuentaPorTelefono(telefono);
    }

    async actualizarCuenta(cuentaID: number, cuenta) {
        return this.cuentaUseCase.actualizarCuenta(cuentaID, cuenta);
    }

    async eliminarCuenta(cuentaID: number) {
        return this.cuentaUseCase.eliminarCuenta(cuentaID);
    }

}