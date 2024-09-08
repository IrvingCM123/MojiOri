import { loginDTO } from "src/app/dto/auth/login.dto";

export interface LoginRepository {
    iniciarSesion(login: loginDTO): Promise<any>;
}