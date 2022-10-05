import React from "react";
import { useState } from "react";
import { Text, View, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from '../theme/styles';
import { v4 as uuid } from 'uuid';

// Models
import { Portfolio, Stock } from "../models/Portfolio";

let portfolio = new Portfolio("Test");

export function AddStockForm() {

    const ListItem = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <Text style={[styles.title, textColor]}>{item.ticker}</Text>
        </TouchableOpacity>
    );
    // Setting up form
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: Number,
            ticker: '',
            positionSize: Number,
            entryPrice: Number,
        }
    });

    const onSubmit = (data: { ticker: string; entryPrice: number | undefined; positionSize: number | undefined; }) => {
        const stock = new Stock(data.ticker, data.entryPrice, data.positionSize)
        stock.id = uuid();
        portfolio.addStockToPortfolio(stock)
        console.log(portfolio);
    }
    // Setting up list
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <ListItem
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };
    
    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Stock ticker"
                    />
                )}
                name="ticker"
            />
            {errors.ticker && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Position size"
                    />
                )}
                name="positionSize"
            />

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Entry price"
                    />
                )}
                name="entryPrice"
            />

            <Button title="Add Position" onPress={handleSubmit(onSubmit)} />

            <FlatList
                data={portfolio.getPortfolioStocks()}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </View>
    )
}

