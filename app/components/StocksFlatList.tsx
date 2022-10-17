import React, { useEffect, useState } from "react";
import { View, FlatList, Text, ListRenderItem } from "react-native";
import { Stock } from "../models/Stock";
import { PortfolioManager } from "../models/PortfolioManager";
import { styles } from "../theme/styles";

export function StocksFlatList() {

    const ListItem = (data: {title: String}) => (
        <View style={styles.item}>
            <Text>{data.title}</Text>
        </View>
    );

    const renderItem: ListRenderItem<Stock> = ({ item }) => (
        <ListItem title={item.ticker} />
    );    

    return (
        <FlatList
            data={PortfolioManager.getInstance().getDefaultPortfolio().getPortfolioStocks()}
            renderItem={renderItem}
            keyExtractor={item => item.ticker}
        />
    )
}