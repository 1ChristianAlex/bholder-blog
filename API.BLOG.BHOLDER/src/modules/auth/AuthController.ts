import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
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
      const loginUser = await this.auth.login({ email, password });
      response
        .status(HttpStatus.OK)
        .header('Authorization', `Bearer ${loginUser.token}`)
        .header('Access-Control-Expose-Headers', `: Authorization`)
        .json(loginUser);
    } catch (error) {
      response.status(HttpStatus.UNAUTHORIZED).json({ message: error.message });
    }
  }
}
