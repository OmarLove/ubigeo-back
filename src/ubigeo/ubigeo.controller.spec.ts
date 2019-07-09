import { Test, TestingModule } from '@nestjs/testing';
import { UbigeoController } from './ubigeo.controller';

describe('Ubigeo Controller', () => {
  let controller: UbigeoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UbigeoController],
    }).compile();

    controller = module.get<UbigeoController>(UbigeoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
