//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const TaskCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
        {item.title}
      </Text>
      <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
        {item.description}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            Başlangıç Tarihi
          </Text>
          <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
            {item.startDate}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            Bitiş Tarihi
          </Text>
          <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
            {item.endDate}
          </Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
});

//make this component available to the app
export default TaskCard;
