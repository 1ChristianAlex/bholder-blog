import { PathLike } from 'fs';

export interface IBucket {
  uploadMemoryFile(file: PathLike): Promise<string>;
  uploadBaseFile(file: string): Promise<string>;
}
