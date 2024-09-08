import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core'; 
import { enumRol as Roles } from 'src/shared/enums/rol.enum';
import { Roles_Key } from 'src/shared/decorators/rol.decorator';
import { Mensajes_Errores_Roles } from 'src/shared/helper/roles.helpers';


@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {

    let validar = false;

    const roles = await this.reflector.getAllAndOverride<Roles>(Roles_Key, [
      context.getHandler(),
      context.getClass(),
    ]);

    const solicitud_Entrante = context.switchToHttp().getRequest();
    const usuario_Solicitud = solicitud_Entrante.user;

    if (!usuario_Solicitud) {
      solicitud_Entrante.authError = Mensajes_Errores_Roles.ROL_NO_ENCONTRADO;
      return false;
    }
    
    const valoresEnum = Object.values(Roles);

    for (let valor of valoresEnum) {
      if (usuario_Solicitud.rol === valor) {
        return (validar = true);
      } else {
        validar = false;
      }
    }

    if (validar === false) {
      solicitud_Entrante.authError = Mensajes_Errores_Roles.ROL_INVALIDO;
      return false;
    }

    return roles === usuario_Solicitud.rol;
  }
}
