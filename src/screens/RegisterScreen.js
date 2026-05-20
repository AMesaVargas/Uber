import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

import {
  registerFirebase,
  saveUser,
} from '../storage/FirestoreService';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {

    try {

      const response = await registerFirebase(
        email,
        password
      );

      if (!response.success) {

        Alert.alert('Error', response.error);
        return;
      }

      const uid = response.user.uid;

      const saveResponse = await saveUser(uid, {
        name,
        email,
        role: 'passenger',
      });

      if (!saveResponse.success) {

        Alert.alert('Error', saveResponse.error);
        return;
      }

      Alert.alert(
        'Success',
        'Usuario registrado correctamente'
      );

      console.log('USER CREATED');
      setName('');
      setEmail('');
      setPassword('');

    } catch (error) {
      console.log('ERROR:', error.message);
      Alert.alert(
      'Error Firebase',
      error.message
      );
    }
  };

  return (

    <View style={styles.container}>

      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button
        title="Registrar"
        onPress={handleRegister}
      />

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },

});

export default Register;