import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';

export function HomeScreen() {
    return (
      <View style={{ flex: 1, padding: 12, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Yea" />
      </View>
    );
  }