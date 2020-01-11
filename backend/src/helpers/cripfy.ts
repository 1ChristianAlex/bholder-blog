import { pbkdf2Sync } from 'crypto';
import { SECRET } from '../config/env';

export class Cripfy {
  private Secrete = Buffer.from(SECRET).toString('hex');

  private Algorithm = 'sha512';

  constructor(private pass: string) {}

  public CreateHash(): string {
    return pbkdf2Sync(
      this.pass,
      this.Secrete,
      616,
      32,
      this.Algorithm
    ).toString('hex');
  }
}
