import { WhatsappRepository } from 'src/core/domain/whatsapp/whatsapp.repository';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WhatsappRepositoryImpl implements WhatsappRepository {
    constructor(
        private configService: ConfigService,
        private http: HttpService,
    ) { }

    private readonly version = this.configService.get<string>('VERSION');
    private readonly ACCESS_TOKEN =
        this.configService.get<string>('ACCESS_TOKEN');
    private readonly NUMERO_ID = this.configService.get<string>('NUMERO_ID');
    private readonly apiUrl = `https://graph.facebook.com/${this.version}/${this.NUMERO_ID}/messages`;

    async enviarMensaje(
        numeroDestino: string | number,
        codigo_enviar: number,
    ): Promise<any> {
        const mensaje = await this.contruirMensaje(codigo_enviar);

        const datos = {
            messaging_product: 'whatsapp',
            to: numeroDestino,
            type: 'template',
            template: {
                name: 'hello_world',
                language: {
                    code: 'en_US',
                },
            },
        };

        try {
            const response = await firstValueFrom(
                this.http.post(this.apiUrl, datos, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.ACCESS_TOKEN}`,
                    },
                }),
            );

            return {
                status: response.status,
                data: response.data,
            };
        } catch (error) {
            return {
                status: error.response?.status || 500,
                message: error.message,
            };
        }
    }

    private async contruirMensaje(codigo_enviar: number): Promise<any> {
        const mensaje = `Bienvenido a la plataforma de mensajería de WhatsApp, tu código de verificación es: ${codigo_enviar}`;

        return mensaje;
    }
}
