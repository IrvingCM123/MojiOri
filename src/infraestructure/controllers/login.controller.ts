import { Controller, Post, Body } from "@nestjs/common";
import { LoginUseCase } from "src/core/use-cases/login.use-case";
import { loginDTO } from "src/app/dto/auth/login.dto";

@Controller('login')
export class LoginController {
    
    constructor(private readonly loginUseCase: LoginUseCase) {}

    @Post()
    async iniciarSesion(@Body() login: loginDTO) {
        return this.loginUseCase.iniciarSesion(login);
    }

}