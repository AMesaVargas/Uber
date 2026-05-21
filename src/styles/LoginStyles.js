import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 50,
  },

  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 18,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },

  loginButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  loginButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  registerText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
  },
  generalText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 15,
    marginBottom: 3,
  },

  registerLink: {
    color: '#00C853',
    fontWeight: 'bold',
  },
});

export default styles;
