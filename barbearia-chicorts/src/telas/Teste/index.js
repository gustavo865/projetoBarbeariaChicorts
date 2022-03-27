import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import { CommonActions } from '@react-navigation/native'
import styles from "./styles"

import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function Teste({ navigation }) {
  return (
    <View
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <Text
        style={styles.title}>Selecione seu barbeiro</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Agendamento")}
        style={styles.buttonBarber}        
        activeOpacity={0.5}>
        {/* <Image
          source={require('../../assets/17004.png')}
          style={styles.buttonImageBarber}
        /> */}
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>
          Barbeiro 1
        </Text>        
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => navigation.navigate("Agendamento")}
        style={styles.buttonBarber}
        activeOpacity={0.5}>
        {/* <Image
          source={require('../../assets/17004.png')}
          style={styles.buttonImageBarber}
        /> */}
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>
          Barbeiro 2
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
      //onPress={() => navigation.navigate("Agendamento")}
      style={styles.buttonMeusAgendamentos}>
        <Text>Meus agendamentos</Text>
      </TouchableOpacity>



      <TouchableOpacity   
      //onPress={() => navigation.navigate("Agendamento")}   
      style={styles.buttonLogout}>
        <Text>LogOut</Text>
      </TouchableOpacity>


    </View>
  );
}