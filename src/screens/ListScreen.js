import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const family = [
        {name: 'Paul', age: 43, key: 'pj'},
        {name: 'Tamah', age: 43, key: 'twgcmwrh'},
        {name: 'Aliezah', age: 20, key: 'arbh'},
        {name: 'Jay', age: 23, key: 'jh'},
        {name: 'Cecilia', age: 19, key: 'cjcam'},
        {name: 'Caden', age: 17, key: 'cxtdh'},
        {name: 'Ethan', age: 15, key: 'epoch'},
    ];
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={family => family.key}
            data={family}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 15
    }
});

export default ListScreen;