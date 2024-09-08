import { LoginRepository } from "../domain/auth/login.repository";
import { Inject, Injectable } from '@nestjs/common';
import { loginDTO } from "src/app/dto/auth/login.dto";

@Injectable()
export class LoginUseCase {

    constructor(
        @Inject('LoginRepository')
        private readonly loginRepository: LoginRepository
    ) {}

    async iniciarSesion(datosLogin: loginDTO): Promise<any> {
        return this.loginRepository.iniciarSesion(datosLogin);
    }

}