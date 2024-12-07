export class LowStockObserver {
  constructor(threshold) {
    this.threshold = threshold;
  }

  notify(productName, newStock, oldStock) {
    if (newStock <= this.threshold) {
      console.log(
        `⚠️ LOW STOCK ALERT: ${productName} has only ${newStock} items left!`
      );
    }
  }
}

export class StockChangeObserver {
  notify(productName, newStock, oldStock) {
    console.log(
      `📋 STOCK UPDATE: ${productName} stock changed from ${oldStock} to ${newStock}`
    );
  }
}
