import { applyDecorators, UseGuards } from '@nestjs/common';
import { enumRol } from '../enums/rol.enum';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { RoleGuard } from 'src/app/guard/role.guard';
import { Roles } from './rol.decorator';

export function Auth(roles: enumRol) {
  return applyDecorators(Roles(roles), UseGuards(AuthGuard, RoleGuard));
} 