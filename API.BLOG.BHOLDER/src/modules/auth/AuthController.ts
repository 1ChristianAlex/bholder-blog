import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './AuthService';
import { LoginInputDto } from 'dto';
import { Response } from 'express';
@Controller()
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('/auth')
  async login(
    @Body() body: LoginInputDto,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const { email, password } = body;
      const token = await this.auth.login({ email, password });
      response.status(200).json({ token });
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  }
}
