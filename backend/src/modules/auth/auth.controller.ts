import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('/auth')
  getHello(@Body() body: any): string {
    console.log(body);

    return body;
  }
}
