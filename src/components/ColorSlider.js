import React from 'react';
import {View, Text, StyleSheet, Slider } from 'react-native';

const ColorSlider = ({name, setter}) => {
    return (
        <View>
            <Text>{name}</Text>
            <Slider
                minimumValue={0}
                maximumValue={255}
                value={255}
                step={1}
                onValueChange={(val) => {
                    setter(val);
                }}
            />
        </View>
    );
};

const styles = new StyleSheet.create({});

export default ColorSlider;
