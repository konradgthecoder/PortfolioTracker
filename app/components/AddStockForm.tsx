import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from '../theme/styles';

// Models
import { Portfolio, PortfolioManager, Stock } from "../models/Portfolio";

export function AddStockForm() {

    // Setting up form
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            ticker: '',
            positionSize: '',
            entryPrice: '',
        }
    });

    const onSubmit = (data: { ticker: string; entryPrice: string; positionSize: string; }) => {
        const stock = new Stock(data.ticker, +data.entryPrice, +data.positionSize);
        PortfolioManager.getInstance().getDefaultPortfolio().addStockToPortfolio(stock);
    }
    
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
        </View>
    )
}

