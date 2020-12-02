class Category {
  constructor(partial: Partial<Category>) {
    Object.assign(this, partial);
  }
  public id: number;
  public name: string;
  public image_category: string;
}

export { Category };
