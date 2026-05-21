import React, { useState } from 'react';

import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from '../styles/LoginStyles';

import { loginFirebase } from '../storage/FirestoreService';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await loginFirebase(email, password);

      if (!response.success) {
        Alert.alert('Error', response.error);
        return;
      }

      Alert.alert('Success', 'Successful Login');

      console.log('USER LOGGED');

      navigation.replace('Main');
    } catch (error) {
      console.log(error);

      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>UberClone</Text>
      </View>

      <View>
        <Text style={styles.generalText}>Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      <View>
        <Text style={styles.generalText}>Password</Text>
        <TextInput
          placeholder="Pasword"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>
          Don't you have an account?{' '}
          <Text style={styles.registerLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;
