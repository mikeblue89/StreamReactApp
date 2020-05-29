import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import bgImage from './images/Black.jpg';
import Logo from './images/Logo.png';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: WIDTH } = Dimensions.get('window');

const LogIn = ({navigation}) => {

  const [showPass, hidePass] = useState(true);

  const passHandler = () => {
    if (showPass == true) {
      hidePass(false);
    } else {
      hidePass(true);
    }
  };

  return (
    <ImageBackground source={bgImage} style={styles.backgroudContainer}>
      <View style={styles.logoContainer} >
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.logoText} >Stream App</Text>
      </View>

      <View style={styles.inputContainer} >
        <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Nombre Usuario'}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Contraseña'}
          secureTextEntry={showPass}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity style={styles.btnEye} >
          <Icon name={showPass == true ? 'ios-eye' : 'ios-eye-off'}
            onPress={passHandler}
            size={26} color={'rgba(255,255,255,0.7)'} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnLogIn} >
        <Text style={styles.text} 
        >Iniciar Sesion</Text>
      </TouchableOpacity>

      <TouchableOpacity  >
        <Text
          style={styles.textCrear}
          onPress={()=>navigation.navigate("Cuenta")}
        >
          No Tienes cuenta?
          </Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroudContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 200,
    height: 200
  },
  logoText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  inputContainer: {
    marginTop: 10
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37
  },
  btnLogIn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#082436',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: "center"
  },
  textCrear: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: "center",
    marginTop: 20
  }
});

export default LogIn;