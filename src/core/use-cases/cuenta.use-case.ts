import { CuentaRepository } from "../domain/cuenta/cuenta.repository";
import { Cuenta } from "../domain/cuenta/cuenta.entity";
import { crearCuentaDto } from "src/app/dto/cuentas/crear-cuenta.dto";
import { actualizarCuentaDto } from "src/app/dto/cuentas/actualizar-cuenta.dto";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class CuentaUseCase {

    constructor(
        @Inject('CuentaRepository')
        private readonly cuentaRepository: CuentaRepository
    ) {}

    async crearCuenta(cuenta: crearCuentaDto): Promise<Cuenta> {
        return this.cuentaRepository.crearCuenta(cuenta);
    }

    async obtenerCuentaPorID(cuentaID: number): Promise<Cuenta | null> {
        return this.cuentaRepository.obtenerCuentaPorID(cuentaID);
    }

    async obtenerCuentaPorTelefono(cuentaTelefono: string): Promise<Cuenta | null> {
        return this.cuentaRepository.obtenerCuentaPorTelefono(cuentaTelefono);
    }

    async obtenerCuentas(): Promise<Cuenta[]> {
        return this.cuentaRepository.obtenerCuentas();
    }

    async actualizarCuenta(cuentaID: number, cuenta: actualizarCuentaDto): Promise<Cuenta> {
        return this.cuentaRepository.actualizarCuenta(cuentaID, cuenta);
    }

    async eliminarCuenta(cuentaID: number): Promise<void> {
        return this.cuentaRepository.eliminarCuenta(cuentaID);
    }
}