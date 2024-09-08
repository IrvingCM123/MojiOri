import { enumRol } from "../enums/rol.enum";
import { SetMetadata } from "@nestjs/common"; 

export const Roles_Key = 'roles';

export const Roles = (rol: enumRol) => SetMetadata(Roles_Key, rol);
