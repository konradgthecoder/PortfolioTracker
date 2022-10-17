// Components
import React, { useState } from "react";
import { Button, SafeAreaView } from "react-native";
import { AddStockForm } from "../components/AddStockForm";
import { StocksFlatList } from "../components/StocksFlatList";
import { Portfolio } from "../models/Portfolio";
import { PortfolioManager } from "../models/PortfolioManager";
import { styles } from "../theme/styles";
import { FetchStockQuote } from "../apis/AlphaVantage";
import { Stock } from "../models/Stock";

// Initializing PorfolioManager With Default Portfolio
let portfolioManager = PortfolioManager.getInstance();
let defaultPortfolio = new Portfolio("Default");
portfolioManager.addPortfolioToAccount(defaultPortfolio);

function useForceUpdate() {
	const [value, setValue] = useState(0);
	return () => setValue(value => value + 1);
}

export function HomeScreen() {
	const forceUpdate = useForceUpdate();

	const handleListChange = () => {
		forceUpdate();
	};

	return (
		<SafeAreaView style={styles.container}>
			<AddStockForm
				handleListChange={handleListChange}
			/>
			<StocksFlatList />
			<Button title="test fetch" onPress={() => FetchStockQuote(new Stock("TSLA", 0, 0))}></Button>
		</SafeAreaView>
	);
}
