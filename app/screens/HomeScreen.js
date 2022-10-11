// Components
import { SafeAreaView } from "react-native";
import { AddStockForm } from "../components/AddStockForm";
import { StocksFlatList } from "../components/StocksFlatList";
import { PortfolioManager } from "../models/Portfolio";
import { styles } from "../theme/styles";

// Models

export function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<AddStockForm />
			<StocksFlatList props={PortfolioManager.getInstance()} />
		</SafeAreaView>
	);
}
