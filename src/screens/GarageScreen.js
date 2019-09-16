import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import GarageVehicle from "../components/GarageVehicle";

const GarageScreen = () => {
    return (
        <View>
            <GarageVehicle plate="ABC123" make="Chev" path={require('../../assets/beach.jpg')}/>
            <GarageVehicle plate="123ABC" make="Chev" path={require('../../assets/forest.jpg')}/>
            <GarageVehicle plate="1A2B3C" make="Suzi" path={require('../../assets/mountain.jpg')}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default GarageScreen;