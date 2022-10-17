import React, { useEffect, useState } from "react";
import { View, FlatList, Text, ListRenderItem } from "react-native";
import { PortfolioManager, Stock } from "../models/Portfolio";
import { styles } from "../theme/styles";

export function StocksFlatList() {
    const [test, setTest] = useState("test");

    const ListItem = (data: {title: String}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{data.title}</Text>
        </View>
    );

    const renderItem: ListRenderItem<Stock> = ({ item }) => (
        <ListItem title={item.ticker} />
    );    

    useEffect(() => {
    }, [PortfolioManager.getInstance().getDefaultPortfolio().getPortfolioStocks()])
    

    return (
        <FlatList
            data={PortfolioManager.getInstance().getDefaultPortfolio().getPortfolioStocks()}
            renderItem={renderItem}
            keyExtractor={item => item.ticker}
        />
    )
}