import { Injectable } from "@nestjs/common";
import { LoginUseCase } from "src/core/use-cases/login.use-case";
import { loginDTO } from "../dto/auth/login.dto";

@Injectable()
export class LoginService {
    constructor(private readonly loginUseCase: LoginUseCase) { }

    async iniciarSesion(datosLogin: loginDTO): Promise<any> {
        return this.loginUseCase.iniciarSesion(datosLogin);
    }
}