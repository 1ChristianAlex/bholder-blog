export default class FileToBase {
  private FReader: FileReader;

  constructor(private File: File) {
    this.FReader = new FileReader();
  }

  toBase64(): Promise<string> {
    return new Promise((res, rej) => {
      this.FReader.onload = result => {
        res(result.target?.result as string);
      };
      this.FReader.onerror = error => {
        rej(error);
      };
      this.FReader.readAsDataURL(this.File);
    });
  }
}
