import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, FlatList, Text, ListRenderItem } from "react-native";
import { Stock } from "../models/Stock";
import { PortfolioManager } from "../models/PortfolioManager";
import { styles } from "../theme/styles";
import { FetchStockQuote } from "../apis/AlphaVantage";
import { currentPortfolioStocks } from "../apis/Firestore";

/**
 * 
 * @returns 
 */
export function StocksFlatList() {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [stocks, setStocks] = useState([]); // Initial empty array of stocks  

    useEffect(() => {
      const fetchStocksFromCurrentPortfolio = currentPortfolioStocks
        .onSnapshot(querySnapshot => {
            const stocks = [];

            querySnapshot.forEach(documentSnapshot => {
                stocks.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });
            });

            setStocks(stocks);
            setLoading(false);
        });
    
      return () => {
        console.log(stocks);
        fetchStocksFromCurrentPortfolio();
      }
    }, [])
    

    const ListItem = (data: {title: string, /* quote: number | undefined */}) => (
        <View style={styles.item}>
            <Text>{data.title}</Text>
        </View>
    );

    const renderItem: ListRenderItem<Stock> = ({ item }) => (
        <ListItem title={item.ticker} /* quote={FetchStockQuote(item)?.price} */ />
    );    

    if (loading) {
        return <ActivityIndicator />
    }

    else return (
        <FlatList
            data={stocks}
            renderItem={renderItem}
        />
    );
}
