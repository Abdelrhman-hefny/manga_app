export class Product {
  constructor(
    public name: string,
    public price: number,
    public category: string
  ) {}

  getDiscountedPrice(discount: number): number {
    return this.price - (this.price * discount) / 100;
  }
}
