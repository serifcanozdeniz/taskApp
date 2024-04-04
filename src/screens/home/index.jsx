//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDTASKS} from '../../utils/routes';

// create a component
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
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
