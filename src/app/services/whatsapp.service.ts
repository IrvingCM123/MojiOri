import { Injectable } from '@nestjs/common';
import { WhatsappUseCase } from 'src/core/use-cases/whatsapp.use-case';
 
@Injectable()
export class WhatsappService {
    constructor(private readonly whatsappUseCase: WhatsappUseCase) {}

    async enviarMensaje(numeroDestinatario: string | number, mensajeEnviar: number) {
        return this.whatsappUseCase.enviarMensajeWhatsapp(numeroDestinatario, mensajeEnviar);
    }
}