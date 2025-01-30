export class CashCalculator {
  static total(...amounts) {
    return amounts.reduce((total, amt) => total + Number(amt), 0).toFixed(2);
  }
}