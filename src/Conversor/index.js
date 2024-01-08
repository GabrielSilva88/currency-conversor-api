import React, { Component } from "react";
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import api from "../services/api";

//> convert?q=USD_PHP&compact=ultra&apiKey=c17c2b4f8ad53acf311a
class Conversor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido: 0
        };

        this.converter = this.converter.bind(this);
    }

    async converter() {
        let de_para = this.state.moedaA + '_' + this.state.moedaB;
        const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=c17c2b4f8ad53acf311a`);
        let cotacao = response.data[de_para];

        let resultado = (cotacao * parseFloat(this.state.moedaB_valor));

        this.setState({
            valorConvertido: resultado.toFixed(2)
        });
        // fecha teclado
        Keyboard.dismiss();
    }
    render() {
        const { moedaA, moedaB } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>
                <TextInput
                    placeholder="Valor de Dolar para Real: "
                    style={styles.areaInput}
                    onChangeText={(moedaB_valor) => this.setState({ moedaB_valor })}
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.areaBotao}
                    onPress={this.converter}
                >
                    <Text style={styles.textoBotao}>Converter</Text>
                </TouchableOpacity>
                <Text style={styles.valorConvertido}>
                    {(this.state.valorConvertido === 0) ? '' : this.state.valorConvertido}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000"
    },
    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: "#ccc",
        textAlign: "center",
        marginTop: 15,
        fontSize: 20
    },
    areaBotao: {
        width: 150,
        height: 45,
        backgroundColor: "#FF0000",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },
    textoBotao: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#fff"
    },
    valorConvertido: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
        marginTop: 15
    }
});

export default Conversor;