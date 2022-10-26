import { Alert } from "react-native";
import { Stock } from "./Stock";
// Get Stocks collection for DefaultPortfolio
import { currentPortfolioStocks } from "../apis/Firestore";

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

    public async addStockToPortfolio(stock: Stock) {
        // First check if the ticker exists in Firebase. If not, add the input stock to DB.
        const tickerDoesExist = (await currentPortfolioStocks.doc(stock.ticker).get()).exists;

        if (!tickerDoesExist) {
            try {
                console.log("Trying to add stock...");
                currentPortfolioStocks
                .doc(stock.ticker)
                .set({
                    ticker: stock.ticker,
                    entryPrice: stock.entryPrice,
                    size: stock.size
                })
                .then(() => {
                    console.log("Stock added!");
                });
            } catch (error) {
                Alert.alert(
                    "Ticker not added",
                    `Failed to add ticker: ${stock.ticker}`
                )
            }
        }
        else {
            Alert.alert(
                "Ticker not added",
                `This ticker: ${stock.ticker} already exists in your Portfolio!`
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