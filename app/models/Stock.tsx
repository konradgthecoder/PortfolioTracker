export class Stock {
    ticker: string;
    entryPrice: number;
    size: number;

    public constructor(
        ticker: string, entryPrice: number = 0, size: number = 0) {
        this.ticker = ticker;
        this.entryPrice = entryPrice;
        this.size = size;
    }
}