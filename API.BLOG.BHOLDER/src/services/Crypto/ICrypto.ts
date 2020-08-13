export interface ICrypto {
  generateHash(value: string): string;
  compareHash(value: string, hash: string): boolean;
}
