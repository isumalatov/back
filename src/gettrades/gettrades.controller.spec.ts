import { Test, TestingModule } from '@nestjs/testing';
import { GettradesController } from './gettrades.controller';

describe('GettradesController', () => {
  let controller: GettradesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GettradesController],
    }).compile();

    controller = module.get<GettradesController>(GettradesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
