import { Injectable } from '@nestjs/common';
import { compareSync, hashSync } from 'bcrypt';
import { HASH_KEY } from 'config/Envs';
import { ICrypto } from './ICrypto';

@Injectable()
export class Crypt implements ICrypto {
  generateHash(value: string): string {
    const hash = hashSync(value, HASH_KEY.length);
    return hash;
  }
  compareHash(value: string, hash: string): boolean {
    const comparedHash = compareSync(value, hash);

    return comparedHash;
  }
}
