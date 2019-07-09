import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UbigeoController } from './ubigeo/ubigeo.controller';
import { UbigeoService } from './ubigeo/ubigeo.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, UbigeoController],
  providers: [AppService, UbigeoService],
})
export class AppModule {}
