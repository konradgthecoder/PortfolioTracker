import { useState } from "react";
import { Text, View, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from '../theme/styles';
import { v4 as uuid } from 'uuid';

let portfolio = [];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
	<TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
		<Text style={[styles.title, textColor]}>{item.stockTicker}</Text>
	</TouchableOpacity>
);

export function HomeScreen() {
	// Setting up form
	const { control, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
            id: Number,
			stockTicker: '',
			positionSize: '',
			entryPrice: '',
		}
	});
	const onSubmit = data => {
        data.id = uuid();
		portfolio.push(data);
		console.log(portfolio);
	}
	// Setting up list
	const [selectedId, setSelectedId] = useState(null);

	const renderItem = ({ item }) => {
		const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
		const color = item.id === selectedId ? 'white' : 'black';

		return (
			<Item
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
				name="stockTicker"
			/>
			{errors.stockTicker && <Text>This is required.</Text>}

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
                data={portfolio}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
		</View>
	);
}
