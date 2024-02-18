import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignInSignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignInSignUp = () => {
    if (isSignIn) {
      // Logic for sign-in
      console.log('Signing in with:', email, password);
    } else {
      // Logic for sign-up
      console.log('Signing up with:', email, password);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignIn ? 'Sign In' : 'Sign Up'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button
        title={isSignIn ? 'Sign In' : 'Sign Up'}
        onPress={handleSignInSignUp}
      />
      <Text
        style={styles.toggleText}
        onPress={() => setIsSignIn(!isSignIn)}
      >
        {isSignIn ? 'New user? Sign Up' : 'Already have an account? Sign In'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  toggleText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignInSignUpPage;
