import { sign, verify } from 'jsonwebtoken';
import { SECRET } from '../config/env';

export class JsonToken {
  public Sing(toToken): string {
    return sign(toToken, SECRET);
  }
  public Verify(token: string) {
    try {
      const tokenClean = token.replace(`Bearer`, '').trim();
      return verify(tokenClean, SECRET);
    } catch (error) {
      return false;
    }
  }
}
