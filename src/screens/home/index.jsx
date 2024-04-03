//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FloatActionButton from '../../components/ui/floatActionButton';

// create a component
const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <FloatActionButton />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Home;
