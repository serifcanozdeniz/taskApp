//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {Input, Button, Toggle} from '@ui-kitten/components';
import * as yup from 'yup';

// create a component
const FormExample = () => {
  const registerSchema = Yup.object().shape({
    name: yup.string().required('Zorunlu Alan'),
    surname: yup.string().required('Zorunlu Alan'),
    email: yup
      .string()
      .required('Zorunlu Alan')
      .email('Geçerli email adresi yazınız'),
    phone: yup
      .string()
      .required('Zorunlu Alan')
      .min(11, 'Minimum 11 hane olmalıdır')
      .max(13, 'Maksimum 13 hane olmalıdır'),
    password: yup.string().required('Zorunlu Alan'),
    passwordConfirm: yup
      .string()
      .required('Zorunlu Alan')
      .oneOf([yup.ref('password')], 'Şifeler uyuşmuyor'),
    agreementConfirm: yup
      .bool()
      .required('Zorunlu')
      .oneOf([true], 'Sözleşmeyi onayla'),
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          backgroundColor: '#06e096',
          minHeight: 125,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          KAYIT OL
        </Text>
      </View>
      <View style={{flex: 1, padding: 10}}>
        <ScrollView>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              birthDate: '',
              gender: '',
              email: '',
              phone: '',
              password: '',
              passwordConfirm: '',
              agreementConfirm: false,
            }}
            validationSchema={registerSchema}
            onSubmit={values => alert(JSON.stringify(values, 0, 2))}>
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
                  caption={errors.name}
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.name}
                  label={'Ad'}
                  placeholder="Ad"
                  onChangeText={handleChange('name')}
                  status={errors.name ? 'danger' : 'success'}
                />
                <Input
                  caption={errors.surname}
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.surname}
                  label={'Soyad'}
                  placeholder="Soyad"
                  onChangeText={handleChange('surname')}
                  status={errors.surname ? 'danger' : 'success'}
                />
                <Input
                  caption={errors.email}
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.email}
                  label={'Email'}
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  status={errors.email ? 'danger' : 'success'}
                />
                <Input
                  caption={errors.phone}
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.phone}
                  label={'Telefon'}
                  placeholder="Telefon"
                  onChangeText={handleChange('phone')}
                  status={errors.phone ? 'danger' : 'success'}
                />
                <Input
                  secureTextEntry
                  caption={errors.password}
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.password}
                  label={'Şifre'}
                  placeholder="Şifre"
                  onChangeText={handleChange('password')}
                  status={errors.password ? 'danger' : 'success'}
                />
                <Input
                  secureTextEntry
                  caption={errors.passwordConfirm}
                  size="large"
                  style={{marginVertical: 10}}
                  value={values.passwordConfirm}
                  label={'Şifre Onay'}
                  placeholder="Şifre Onay"
                  onChangeText={handleChange('passwordConfirm')}
                  status={errors.passwordConfirm ? 'danger' : 'success'}
                />
                <View>
                  <Toggle
                    checked={values.agreementConfirm}
                    onChange={value =>
                      setFieldValue('agreementConfirm', value)
                    }>
                    Sözleşmeyi okudum, onaylıyorum.
                  </Toggle>
                  {errors.agreementConfirm && (
                    <Text style={{color: 'red'}}>
                      {errors.agreementConfirm}
                    </Text>
                  )}
                </View>
                <Button
                  status="success"
                  style={{marginTop: 30}}
                  onPress={handleSubmit}>
                  KAYDET
                </Button>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
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
export default FormExample;
