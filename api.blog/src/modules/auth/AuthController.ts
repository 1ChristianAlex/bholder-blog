import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './AuthService';
import { LoginInputDto, LoginOutputDto, TokenPayload } from 'dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { JwtAuthGuard } from '../JWTAuth/JwtAuthGuard';
import { Payload } from '../JWTAuth/PayloadDecorator';

@Controller('/auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post()
  async login(@Body() body: LoginInputDto): Promise<LoginOutputDto> {
    try {
      const { email, password } = body;
      return this.auth.login({ email, password });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/refresh')
  async refreshUser(@Payload() payload: TokenPayload): Promise<LoginOutputDto> {
    try {
      return this.auth.refreshUser(payload);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
