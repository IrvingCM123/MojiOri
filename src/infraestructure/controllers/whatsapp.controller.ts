import { Controller, Post, Body } from "@nestjs/common";
import { WhatsappUseCase } from "src/core/use-cases/whatsapp.use-case";

@Controller('whatsapp')
export class WhatsappController {
    
    constructor(private readonly whatsappUseCase: WhatsappUseCase) {}

    @Post()
    async enviarMensaje(@Body() mensaje: {numeroDestinatario: string | number, mensajeEnviar: number}) {
        console.log('mensaje', mensaje);
        return this.whatsappUseCase.enviarMensajeWhatsapp(mensaje.numeroDestinatario, mensaje.mensajeEnviar);
    }

}