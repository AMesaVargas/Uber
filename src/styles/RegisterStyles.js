import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 25,
    paddingVertical: 40,
    justifyContent: 'center',
  },

  photoContainer: {
    width: 100,
    height: 100,
    borderRadius: 65,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#c3c1c1',
    overflow: 'hidden',
  },

  photoText: {
    color: '#888',
    fontSize: 18,
    fontWeight: 'bold',
  },

  photo: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 35,
  },

  generalText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 3,
  },

  titleScreen: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },

  textScreen: {
    color: '#7a7878',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },

  textContainer: {
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 18,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },

  registeredButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  registeredButtonText: {
    color: '#0000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  registerButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 20,
    fontSize: 15,
  },

  loginLink: {
    color: '#00C853',
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  optionButton: {
    backgroundColor: '#1E1E1E',
    width: '48%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },

  selectedOption: {
    backgroundColor: '#00C853',
  },

  optionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  pickerContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#333',
  },

  picker: {
    color: '#FFF',
  },
});

export default styles;
