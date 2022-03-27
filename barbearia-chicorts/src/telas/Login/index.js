import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

import firebase from "firebase"
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"



export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {

    //console.log(firebase.auth)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;        
        navigation.navigate("Teste", { idUser: user.uid})
      })
      .catch((error) => {
        setErrorLogin(true)
        console.log(error)
        let errorCode = error.code;
        let errorMessage = error.message;

      });
  }


  useEffect(() => {

  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text
        style={styles.title}>Bem Vindo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        //backgroundColor= 'red'
        //textAlign='center'
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
        //backgroundColor= 'red'
        //textAlign='center'          
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}

      />

      {errorLogin === true
        ?
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="bdbdbd"
          />
          <Text style={styles.warningAlert}>E-mail ou senha inv�lido</Text>
        </View>
        :
        <View />
      }
      {email === "" || password === ""
        ?
        <TouchableOpacity
          disabled={true}
          style={styles.buttonLogin}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={loginFirebase}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      }
     <View style={{ flexDirection: 'row', marginTop: 20 }}>
     <Text style={styles.registration}>
        Ainda não é cadastrado? 
      
      </Text>  
      <Text
          style={styles.linkSubscribe}
          onPress={() => navigation.navigate("NewUser")}
        >
          Cadastre-se...
        </Text>
     </View>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}