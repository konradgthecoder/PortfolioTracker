import { Alert } from "react-native";
import { Stock } from "./Stock";

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
        if (!this.portfolioStocks.find(s => s.ticker === stock.ticker)) {
            this.portfolioStocks.push(stock);
        }
        else {
            Alert.alert(
                "Ticker not added",
                "This ticker already exists in your Portfolio!"
            );
        }
    }

    public removeStockFromPortfolio(stock: Stock) {
        const index = this.portfolioStocks.indexOf(stock);
        if (index > -1) {
            this.portfolioStocks.splice(index, 1);
        }
    }
}