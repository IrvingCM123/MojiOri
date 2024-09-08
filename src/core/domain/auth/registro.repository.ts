import { Registro } from './registro.entity';
import { registroDTO } from 'src/app/dto/auth/registro.dto';

export interface RegistroRepository {
    crearNuevoCuenta(registro: registroDTO): Promise<Registro>;
}