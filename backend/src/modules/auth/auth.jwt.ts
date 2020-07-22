import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthJWT {
  constructor(private jwtService: JwtService) {}

  // eslint-disable-next-line @typescript-eslint/ban-types
  generateToken(payload: object): string {
    return this.jwtService.sign(payload);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  verifyToken(token: string): object {
    return this.jwtService.verify(token);
  }
}
