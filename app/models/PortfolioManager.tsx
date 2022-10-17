import { Portfolio } from "./Portfolio";

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

    public getDefaultPortfolio(): Portfolio {
        return this.accountPortfolios[0];
    }

    public getAccountPortfolios(): Portfolio[] {
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