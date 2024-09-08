import { RegistroRepository } from "../domain/auth/registro.repository";
import { Inject, Injectable } from '@nestjs/common';
import { registroDTO } from "src/app/dto/auth/registro.dto";

@Injectable()
export class RegistroUseCase {

    constructor(
        @Inject('RegistroRepository')
        private readonly registroRepository: RegistroRepository
    ) {}

    async crearNuevoCuenta(datosRegistro: registroDTO): Promise<any> {
        return this.registroRepository.crearNuevoCuenta(datosRegistro);
    }

}