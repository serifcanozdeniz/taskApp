//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {Button, Input, Radio, RadioGroup} from '@ui-kitten/components';
import CustomerDatePicker from '../../components/ui/customDatePicker';
import {taskSchema} from '../../utils/validations';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const AddTask = () => {
  const saveTask = async values => {
    try {
      await AsyncStorage.multiSet([firstPair, secondPair]);
    } catch (e) {
      //save error
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          description: '',
          startDate: null,
          endDate: null,
          category: null,
        }}
        validationSchema={taskSchema}
        onSubmit={values => saveTask(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          errors,
        }) => (
          <View>
            <Input
              caption={errors.title}
              size="large"
              style={{marginVertical: 10}}
              value={values.title}
              label={'Başlık'}
              placeholder=""
              onChangeText={handleChange('title')}
              status={errors.title ? 'danger' : 'success'}
            />
            <Input
              multiline
              caption={errors.description}
              size="large"
              style={{marginVertical: 10}}
              value={values.description}
              label={'Açıklama'}
              placeholder=""
              onChangeText={handleChange('description')}
              status={errors.description ? 'danger' : 'success'}
            />
            <CustomerDatePicker
              caption={errors.startDate}
              size="large"
              style={{marginVertical: 10}}
              date={values.startDate}
              label={'Başlangıç Tarihi'}
              onSelectDate={date => setFieldValue('startDate', date)}
              status={errors.startDate ? 'danger' : 'success'}
            />
            <CustomerDatePicker
              caption={errors.endDate}
              size="large"
              style={{marginVertical: 10}}
              date={values.endDate}
              label={'Bitiş Tarihi'}
              onSelectDate={date => setFieldValue('endDate', date)}
              status={errors.endDate ? 'danger' : 'success'}
            />
            <RadioGroup
              selectedIndex={values.category}
              onChange={index => setFieldValue('category', index)}>
              <Radio status="success">Yazılım</Radio>
              <Radio status="success">Tasarım</Radio>
              <Radio status="success">Operasyon</Radio>
            </RadioGroup>
            <Button
              status="success"
              style={{marginTop: 30}}
              onPress={handleSubmit}>
              KAYIT OL
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

//make this component available to the app
export default AddTask;
