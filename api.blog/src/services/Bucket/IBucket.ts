import { PathLike } from 'fs';

export interface IBucket {
  uploadBaseFile(file: string): Promise<string>;
}
