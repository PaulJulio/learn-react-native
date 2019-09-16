import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Paul';
    const greeting = <Text style={styles.body}>My name is { name }</Text>;

    return (
        <View>
            <Text style={styles.header}>Getting Started with React Native!</Text>
            {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 45
    },
    body: {
        fontSize: 20
    }
});

export default ComponentsScreen;