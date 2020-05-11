import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/opa')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/teste/:id')
  getId(@Param() { id }): string {
    return id;
  }
}
