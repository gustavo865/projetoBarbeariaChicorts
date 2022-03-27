import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/topo.png'


const width = Dimensions.get('screen').width;

export default function Topo({ nomeBarbearia }) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.nomeBarbearia}>{nomeBarbearia}</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    nomeBarbearia: {
        width: "100%",
        textAlign: "center",
        position: "absolute",
        color: "white",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16
    },

});