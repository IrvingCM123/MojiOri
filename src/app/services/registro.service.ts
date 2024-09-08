import { Injectable } from "@nestjs/common";
import { RegistroUseCase } from "src/core/use-cases/registro.use-case";
import { registroDTO } from "../dto/auth/registro.dto";

@Injectable()
export class RegistroService {
    constructor(private readonly registroUseCase: RegistroUseCase) { }

    async crearNuevoCuenta(datosRegistro: registroDTO): Promise<any> {
        return this.registroUseCase.crearNuevoCuenta(datosRegistro);
    }
}