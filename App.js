import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { FontAwesome5 }from '@expo/vector-icons'; 

export default function App() {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? `padding` : `height`}
    >
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

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
      </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>
          Acessar
          </Text>
        </TouchableOpacity>
      

      <TouchableOpacity style={styles.faceContainer}>
        <FontAwesome5 name="facebook" size={25} color="#399fff"/>
        <Text style={styles.faceText}>Continue as Arthur</Text>
      </TouchableOpacity>

      <View style={styles.divider}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine}></View>
      </View>

      <View stlye={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don’t have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>


    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  },
  dividerText:{
    marginHorizontal: '3%',
  },
  faceContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%'
  },
  faceText:{
    color: '#399fff',
    paddingLeft: 8,
    fontSize: 15
  },
  divider:{
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dividerLine:{
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5
  },
  signUpContainer:{
    flexDirection: 'row',
    marginTop: '10%'
  },
  signUpText:{
    color: '#C4C4C4',
    paddingRight: 5
  },
  signUpButton:{
    color: '#399fff',
    fontWeight: 'bold'
  }
});
