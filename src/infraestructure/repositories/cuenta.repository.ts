import { CuentaRepository } from 'src/core/domain/cuenta/cuenta.repository';
import { Cuenta } from 'src/core/domain/cuenta/cuenta.entity';
import { crearCuentaDto } from 'src/app/dto/cuentas/crear-cuenta.dto';
import { actualizarCuentaDto } from 'src/app/dto/cuentas/actualizar-cuenta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CuentaEntity } from '../database/cuenta.entity,schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CuentaRepositoryImpl implements CuentaRepository {

    constructor(
        @InjectRepository(CuentaEntity)
        private readonly cuentaRepository: Repository<CuentaEntity>,
    ) { }

    async crearCuenta(cuenta: crearCuentaDto): Promise<Cuenta> {
        const buscarCuenta = await this.obtenerCuentaPorTelefono(
            cuenta.cuentaTelefono,
        );

        if (buscarCuenta === null) {
            cuenta.cuentaContrasena = await bcrypt.hash(cuenta.cuentaContrasena, 10);

            const nuevaCuenta = this.cuentaRepository.create(cuenta);
            return await this.cuentaRepository.save(nuevaCuenta);
        }
        {
            return buscarCuenta;
        }
    }

    async actualizarCuenta(
        cuentaID: number,
        cuenta: actualizarCuentaDto,
    ): Promise<Cuenta> {
        await this.cuentaRepository.update(cuentaID, cuenta);
        return await this.cuentaRepository.findOneById(cuentaID);
    }

    async obtenerCuentaPorID(id: number): Promise<Cuenta> {
        return await this.cuentaRepository.findOne({
            where: {
                cuentaID: id,
            },
        });
    }

    async obtenerCuentaPorTelefono(cuentaTelefono: string): Promise<Cuenta> {
        return await this.cuentaRepository.findOne({
            where: {
                cuentaTelefono: cuentaTelefono,
            },
        });
    }

    async obtenerCuentas(): Promise<Cuenta[]> | null {
        return await this.cuentaRepository.find();
    }

    async eliminarCuenta(id: number): Promise<void> {
        await this.cuentaRepository.delete(id);
    }
}
