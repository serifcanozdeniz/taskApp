//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const FloatActionButton = () => {
  return (
    <View style={styles.container}>
      <Text>FloatActionButton</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    width: 70,
    height: 70,
    borderRadius: 1000,
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
});

//make this component available to the app
export default FloatActionButton;
