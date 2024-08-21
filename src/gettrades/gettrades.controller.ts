import { Controller, Post, Body } from '@nestjs/common';

@Controller('gettrades')
export class GettradesController {
  @Post()
  create(@Body() body: any) {
    console.log(body);
    return { status: 'Operación recibida' };
  }
}
