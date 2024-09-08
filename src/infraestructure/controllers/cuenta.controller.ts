import { Controller, Post, Get, Put, Delete, Param, Body } from "@nestjs/common";
import { CuentaUseCase } from "src/core/use-cases/cuenta.use-case";
import { crearCuentaDto } from "src/app/dto/cuentas/crear-cuenta.dto";
import { actualizarCuentaDto } from "src/app/dto/cuentas/actualizar-cuenta.dto";

@Controller('cuentas')
export class CuentaController {
    
    constructor(private readonly cuentaUseCase: CuentaUseCase) {}

    @Post()
    async crearCuenta(@Body() cuenta: crearCuentaDto) {
        return this.cuentaUseCase.crearCuenta(cuenta);
    }

    @Get()
    async obtenerCuentas() {
        return this.cuentaUseCase.obtenerCuentas();
    }

    @Get('/obtenerID/:cuentaID')
    async obtenerCuentaPorID(@Param('cuentaID') cuentaID: number) {
        return this.cuentaUseCase.obtenerCuentaPorID(cuentaID);
    }

    @Get('/obtenerTelefono/:telefono')
    async obtenerCuentaPorTelefono(@Param('telefono') telefono: string) {
        return this.cuentaUseCase.obtenerCuentaPorTelefono(telefono);
    }

    @Put(':cuentaID')
    async actualizarCuenta(@Param('cuentaID') cuentaID: number, @Body() cuenta: actualizarCuentaDto) {
        return this.cuentaUseCase.actualizarCuenta(cuentaID, cuenta);
    }

    @Delete(':cuentaID')
    async eliminarCuenta(cuentaID: number) {
        return this.cuentaUseCase.eliminarCuenta(cuentaID);
    }

}