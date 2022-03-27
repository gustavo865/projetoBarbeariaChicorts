import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import mock from '../../mocks/barber';

import Detalhes from './componentes/Detalhes';
import Topo from './componentes/Topo';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto';
import Botao from '../../componentes/Botao';


export default function Barber() {

    const { topo, detalhes, itens, detalhes: { botao } } = mock;

    const navigation = useNavigation();

    return <>

        <FlatList
            ListFooterComponentStyle={estilos.footer}
            ListFooterComponent={(<Botao texto={botao} style={estilos.botao} onPress={() => { navigation.navigate("Login") }} />)}
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.barber}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.servico}>{itens.servicos}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    servico: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 10,
        fontSize: 20,
        lineHeight: 32
    },
    barber: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    footer: {
        padding: 10,

    }
});