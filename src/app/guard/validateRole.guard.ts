import { Mensajes_Errores_Roles } from 'src/shared/helper/roles.helpers';
import { enumRol as Rol } from 'src/shared/enums/rol.enum';
import { User_Interface } from 'src/shared/interface/user.interface';

export function validarAdmin(user: User_Interface) {

  if (user.rol === Rol.ADMINISTRADOR) {
    return true;
  } else {
    return Mensajes_Errores_Roles.ROL_NO_AUTORIZADO;
  }
}

export function validarUsuario(user: User_Interface) {
  if (user.rol === Rol.USUARIO) {
    return true;
  } else {
    return Mensajes_Errores_Roles.ROL_NO_AUTORIZADO;
  }
}

export function validarCajero(user: User_Interface) {
  if (user.rol === Rol.CAJERO) {
    return true;
  } else {
    return Mensajes_Errores_Roles.ROL_NO_AUTORIZADO;
  }
}
