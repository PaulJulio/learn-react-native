import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
      <View>
          <Text style={styles.text}>Hello, World!</Text>
          <Button
              onPress={() => navigation.navigate('Components')}
              title="Components Demo"
          />
          <Button
              onPress={() => navigation.navigate('List')}
              title="List Demo"
          />
          <Button
              onPress={() => navigation.navigate('Garage')}
              title="Garage Demo"
          />
          <Button
              onPress={() => navigation.navigate('Counter')}
              title="Counter Demo"
          />
          <Button
              onPress={() => navigation.navigate('Color')}
              title="Color Demo"
          />
          <Button
              onPress={() => navigation.navigate('Text')}
              title="Text Input Demo"
          />
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
