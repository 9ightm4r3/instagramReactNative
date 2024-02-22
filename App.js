import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" translucent={false}/>
      
      <Image
        source={require(`./src/assets/Logo.png`)}
        style={styles.logo}
      />

      <TextInput
        placeholder='Phone Number, username or email address'
        style={styles.input}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
      />

      <View style={styles.forgotpassContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotpassText}
          >Forgotten password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>
          Acessar
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: 'center'  
  },
  logo: {
    marginTop: Platform.OS === 'android' ? '15%' : '20%',
    marginBottom: Platform.OS === 'android' ? '12%' : '15%',
     
  },
  input:{
    width: '90%',
    height: 40,
    backgroundColor: '#F4F3F3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  forgotpassContainer:{
    width: '90%',
    alignItems: 'flex-end'
  },
  forgotpassText:{
    color: '#399fff',
  },
  loginButton:{
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  loginText:{
    color: '#FFF',
    fontSize: 17
  }


});
