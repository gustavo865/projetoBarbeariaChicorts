import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import firebase from "firebase"
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { CommonActions } from '@react-navigation/native'


export default function NewUser({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const register = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {

        let user = userCredential.user;
        //navigation.navigate("Teste")
        navigation.dispatch(CommonActions.goBack())
      })
      .catch((error) => {
        setErrorRegister(true)
        let errorCode = error.code;
        let errorMessage = error.message;

      });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text
        style={styles.title}>Crie sua conta</Text>
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
        placeholder="Digite sua senha (minimo 6 caracteres)"
        //backgroundColor= 'red'
        //textAlign='center'          
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {errorRegister === true
        ?
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="bdbdbd"
          />
          <Text style={styles.warningAlert}>E-mail ou senha invalido</Text>
        </View>
        :
        <View />
      }
      {email === "" || password === "" || password.length<6
        ?
        <TouchableOpacity
          disabled={true}
          style={styles.buttonRegister}
        >
          <Text style={styles.textButtonRegister}>Registrar</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={register}
        >
          <Text style={styles.textButtonRegister}>Registrar</Text>
        </TouchableOpacity>
      }
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
      <Text style={styles.login}>
        Já tem uma conta?
        
      </Text>
      <Text
          style={styles.linkLogin}
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        >
          Login...
        </Text>
        </View>
      <View style={{ height: 100 }} />



    </KeyboardAvoidingView>
  );
}