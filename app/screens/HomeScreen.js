// Components
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { AddStockForm } from "../components/AddStockForm";
import { StocksFlatList } from "../components/StocksFlatList";
import { Portfolio, PortfolioManager } from "../models/Portfolio";
import { styles } from "../theme/styles";

// Initializing PorfolioManager With Default Portfolio
let portfolioManager = PortfolioManager.getInstance();
let defaultPortfolio = new Portfolio("Default");
portfolioManager.addPortfolioToAccount(defaultPortfolio);

export function HomeScreen() {

	useEffect(() => {
		console.log(PortfolioManager.getInstance().getDefaultPortfolio().getPortfolioStocks());
	  }, [PortfolioManager.getInstance().getDefaultPortfolio().getPortfolioStocks()]);

	return (
		<SafeAreaView style={styles.container}>
			<AddStockForm />
			<StocksFlatList />
		</SafeAreaView>
	);
}
