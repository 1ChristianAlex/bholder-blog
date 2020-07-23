import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { SECRET } from 'config/envs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private jwtService: JwtService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: SECRET,
    });
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  generateToken(payload: object): string {
    return this.jwtService.sign(payload);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  verifyToken(token: string): object {
    return this.jwtService.verify(token);
  }

  async validate(payload: any): Promise<object> {
    const user = { userId: payload.sub, username: payload.username };
    return user;
  }
}
