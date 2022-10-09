/**
 * The Portfolio class is defined as a singleton, and includes all methods for storing and manipulating
 * individual Stocks in a user's Portfolio.
 */
export class Stock {
    id: string;
    ticker: string;
    entryPrice: number;
    size: number;

    public constructor(
        id: string, ticker: string, entryPrice: number = 0, size: number = 0) {
        this.id = id;
        this.ticker = ticker;
        this.entryPrice = entryPrice;
        this.size = size;
    }
}

export class Portfolio {
    private portfolioName = "";
    private portfolioStocks: Stock[] = [];

    public constructor(portfolioName: string) {
        this.portfolioName = portfolioName;
    }

    public getPortfolioStocks(): Stock[] {
        return this.portfolioStocks;
    }

    public getPortfolioName(): string {
        return this.portfolioName;
    }

    public addStockToPortfolio(stock: Stock) {
        this.portfolioStocks.push(stock)
    }

    public removeStockFromPortfolio(stock: Stock) {
        const index = this.portfolioStocks.indexOf(stock);
        if (index > -1) {
            this.portfolioStocks.splice(index, 1);
        }
    }


}