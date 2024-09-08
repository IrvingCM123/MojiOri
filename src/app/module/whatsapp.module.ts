import { Module } from '@nestjs/common';
import { WhatsappService } from '../services/whatsapp.service';
import { WhatsappUseCase } from 'src/core/use-cases/whatsapp.use-case';
import { WhatsappRepositoryImpl } from 'src/infraestructure/repositories/whatsapp.repository';
import { WhatsappController } from 'src/infraestructure/controllers/whatsapp.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [WhatsappController],
  providers: [
    WhatsappService,
    WhatsappUseCase,
    {
      provide: 'WhatsappRepository',
      useClass: WhatsappRepositoryImpl,
    },
  ],
  exports: [WhatsappUseCase, WhatsappService],
})
export class WhatsAppModule {}
