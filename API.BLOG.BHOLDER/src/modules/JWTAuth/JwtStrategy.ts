import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { SECRET } from 'config/Envs';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from 'dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private jwtService: JwtService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: SECRET,
    });
  }
  generateToken(payload: TokenPayload): string {
    return this.jwtService.sign(payload);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  verifyToken(token: string): object {
    return this.jwtService.verify(token);
  }

  async validate(payload: TokenPayload): Promise<TokenPayload> {
    return payload;
  }
}
