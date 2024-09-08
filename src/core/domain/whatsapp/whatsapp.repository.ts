export interface WhatsappRepository {
    enviarMensaje(numeroDestino: string | number, codigo_enviar: number);
}