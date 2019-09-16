import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';

const GarageVehicle = (props) => {
    return (
        <View>
            <Image source={props.path} />
            <Text>
                Plate {props.plate}
            </Text>
            <Text>
                Make {props.make}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default GarageVehicle;