import { createHmac } from 'crypto';
import { HASH_KEY } from 'config/Envs';
import { Injectable } from '@nestjs/common';
import { ICrypto } from 'interfaces/ICrypto';

@Injectable()
export default class Crypt implements ICrypto {
  generateHash(value: string): string {
    const hmac = createHmac('sha256', HASH_KEY);
    hmac.update(value);
    const digest = hmac.digest('hex');
    return digest;
  }
}
