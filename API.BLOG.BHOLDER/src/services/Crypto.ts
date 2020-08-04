import { createHmac } from 'crypto';
import { HASH_KEY } from 'config/envs';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class Crypt {
  generateHash(value: string): string {
    const hmac = createHmac('sha256', HASH_KEY);
    hmac.update(value);
    const digest = hmac.digest('hex');
    return digest;
  }
}
