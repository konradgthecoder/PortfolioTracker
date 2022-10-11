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

/**
 * The Portfolio class is responsible for the management of Stocks in a User's Portfolio.
 */
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
        this.portfolioStocks.push(stock);
    }

    public removeStockFromPortfolio(stock: Stock) {
        const index = this.portfolioStocks.indexOf(stock);
        if (index > -1) {
            this.portfolioStocks.splice(index, 1);
        }
    }
}

/**
 * The PortfolioManager class is defined as a singleton, and includes all methods for storing and manipulating
 * individual Portfolios in a User's Account.
 */
export class PortfolioManager {
    private static instance: PortfolioManager;
    private accountPortfolios: Portfolio[] = [];

    private constructor() { }

    public static getInstance(): PortfolioManager {
        if (!PortfolioManager.instance) {
            PortfolioManager.instance = new PortfolioManager();
        }

        return PortfolioManager.instance;
    }

    public getAccountPortfolios() {
        return this.accountPortfolios;
    }

    public addPortfolioToAccount(portfolio: Portfolio) {
        this.accountPortfolios.push(portfolio);
    }

    public removePortfolioFromAccount(portfolio: Portfolio) {
        const index = this.accountPortfolios.indexOf(portfolio);
        if (index > -1) {
            this.accountPortfolios.splice(index, 1);
        }
    }
}