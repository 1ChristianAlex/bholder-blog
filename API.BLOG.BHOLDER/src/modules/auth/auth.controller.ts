import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ILogin } from 'interfaces';
import { Response } from 'express';
@Controller()
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('/auth')
  async login(@Body() body: ILogin, @Res() response: Response): Promise<void> {
    try {
      const { email, password } = body;
      const token = await this.auth.login({ email, password });
      response.status(200).json({ token });
    } catch (error) {
      response.status(302).json(error);
    }
  }
}
