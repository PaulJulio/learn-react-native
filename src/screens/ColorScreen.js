import React, { useState } from 'react';
import {View, Text, StyleSheet, Slider } from 'react-native';
import ColorSlider from "../components/ColorSlider";

const ColorScreen = () => {
    const [blue, setBlue] = useState(255);
    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(255);
    return (
         <View>
             <Text>Color Screen</Text>
             <ColorSlider
                 name={"Blue"}
                 setter={(val) => setBlue(val)}
             />
             <ColorSlider
                 name={"Green"}
                 setter={(val) => setGreen(val)}
             />
             <ColorSlider
                 name={"Red"}
                 setter={(val) => setRed(val)}
             />
             <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
         </View>
     );
};

const styles = StyleSheet.create({});

export default ColorScreen;