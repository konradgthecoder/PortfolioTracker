import React from "react";
import { SafeAreaView, View, FlatList, Text, ListRenderItem } from "react-native";
import { Stock } from "../models/Portfolio";
import { styles } from "../theme/styles";

export function StocksFlatList({ props }: { props: [Stock] }) {
    const ListItem = (data: {title: String}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{data.title}</Text>
        </View>
    );

    const renderItem: ListRenderItem<Stock> = ({ item }) => (
        <ListItem title={item.ticker} />
    );

    return (
        <FlatList
            data={props}
            renderItem={renderItem}
            keyExtractor={item => item.ticker}
        />
    )
}