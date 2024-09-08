import { WhatsappRepository } from "../domain/whatsapp/whatsapp.repository";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class WhatsappUseCase {

    constructor(
        @Inject('WhatsappRepository')
        private readonly whatsappRepository: WhatsappRepository
    ) {}

    async enviarMensajeWhatsapp(numeroDestino: number | string, mensajeEnviar: number) {
        return this.whatsappRepository.enviarMensaje(numeroDestino, mensajeEnviar);
    }

}