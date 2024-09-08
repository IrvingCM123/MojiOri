import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from 'src/shared/constants/jwt.constant';
import { Errores_TOKEN } from 'src/shared/helper/Token.helper';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const extraer_solicitud: any = context.switchToHttp().getRequest();

        const token = this.extraerTokenSolicitud(extraer_solicitud);

        if (!token) {
            extraer_solicitud.authError = Errores_TOKEN.TOKEN_AUTENTICACION_NO_ENCONTRADO;
            return false;
        }

        try {

            const payload = await this.jwtService.verifyAsync(token, {
                secret: jwtConstants.secret,
            });

            extraer_solicitud.user = payload;

            extraer_solicitud.accountId = payload.accountId;

            return true;

        } catch (error) {
            extraer_solicitud.authError = Errores_TOKEN.TOKEN_AUTENTICACION_INVALIDO;

            return false;
        }

    }

    private extraerTokenSolicitud(solicitudEntrante: Request): string | undefined {

        const authHeader = solicitudEntrante.headers.authorization;

        if (!authHeader) {
            return Errores_TOKEN.TOKEN_AUTENTICACION_NO_ENCONTRADO;
        }

        const partes_Token = authHeader.split(' ');

        if (partes_Token.length !== 2) {
            return Errores_TOKEN.TOKEN_AUTENTICACION_MALFORMADO;
        }

        const [scheme, token] = partes_Token;

        if (!/^Bearer$/i.test(scheme)) {
            return Errores_TOKEN.TOKEN_AUTENTICACION_MALFORMADO;
        }

        return token;
    }
}
