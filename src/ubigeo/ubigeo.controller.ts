import { Controller, Get } from '@nestjs/common';
import { UbigeoService } from './ubigeo.service';
import { Ubigeo } from '../model/ubigeo';

@Controller('ubigeo')
export class UbigeoController {

  constructor(private ubigeoService :UbigeoService ){

  }
  @Get('listarUbigeos')
    getAllUbigeos(): Promise<Ubigeo[]> {
      console.log('emtro  controller');
      return  this.ubigeoService.getUbigeos();
    }
}
