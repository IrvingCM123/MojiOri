import { Controller, Post, Body } from "@nestjs/common";
import { RegistroUseCase } from "src/core/use-cases/registro.use-case"; 
import { registroDTO } from "src/app/dto/auth/registro.dto";

@Controller('registro')
export class RegistroController {
    
    constructor(private readonly registroUseCase: RegistroUseCase) {}

    @Post()
    async crearNuevoCuenta(@Body() registro: registroDTO) {
        return this.registroUseCase.crearNuevoCuenta(registro);
    }

}