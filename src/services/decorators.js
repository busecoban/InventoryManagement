export class PriceIncreaseDecorator {
  constructor(product, percentage) {
    this.product = product;
    this.percentage = percentage;
  }

  getPrice() {
    return this.product.price * (1 + this.percentage);
  }

  getDetails() {
    return {
      ...this.product,
      price: this.getPrice(),
    };
  }
}

export class DiscountDecorator {
  constructor(product, percentage) {
    this.product = product;
    this.percentage = percentage;
  }

  getPrice() {
    return this.product.price * (1 - this.percentage);
  }

  getDetails() {
    return {
      ...this.product,
      price: this.getPrice(),
    };
  }
}
