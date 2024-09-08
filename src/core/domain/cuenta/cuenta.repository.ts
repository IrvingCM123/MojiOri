import { Cuenta } from "./cuenta.entity";
import  { crearCuentaDto } from "src/app/dto/cuentas/crear-cuenta.dto";
import { actualizarCuentaDto } from "src/app/dto/cuentas/actualizar-cuenta.dto";

export interface CuentaRepository {
    crearCuenta(cuenta: crearCuentaDto): Promise<Cuenta>;
    obtenerCuentaPorID(cuentaID: number): Promise<Cuenta | null>;
    obtenerCuentaPorTelefono(cuentaTelefono: string): Promise<Cuenta | null>;
    obtenerCuentas(): Promise<Cuenta[]> | Promise<null> ;
    actualizarCuenta(cuentaID: number, cuenta: actualizarCuentaDto): Promise<Cuenta>;
    eliminarCuenta(cuentaID: number): Promise<void>;
}