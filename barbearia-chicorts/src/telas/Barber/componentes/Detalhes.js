import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto';



export default function Detalhes({ textoBoasVindas, logoBarber, textoQuemSomos, historia }){
    return <>
        
        <Texto style={estilos.boasVindas}>{textoBoasVindas}</Texto>
        
        <View style={estilos.barber}>
        <Image source={logoBarber} style={estilos.imagemBarber} />
        <Texto style={estilos.quemSomos}>{textoQuemSomos}</Texto>
        </View>

         <Texto style={estilos.historia}>{historia}</Texto>
   
    </>
}

const estilos = StyleSheet.create({

    boasVindas: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    quemSomos: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    barber: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemBarber: {
        width: 32,
        height: 32
    },
  

});