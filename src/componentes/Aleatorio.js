import React from "react";
import { Text, SafeAreaView } from "react-native";
import estilo from "./estilo";

// Forma 1 de desconstruir/receber As propriedades dos argumentos: (Obs: reparar as duas linhas abaixo)
// export default (props) => {
//     const { min, max } = props
//     return (
//         <Text>{min} e {max}</Text>
//     )
// }

// Forma 2 de desconstruir/receber As propriedades dos argumentos: (Obs: reparar a primeira linha abaixo)
export default ({ min, max }) => {
    const delta = (max - min + 1)
    const aleatorio = Math.floor(Math.random() * delta + min)
    return (
        <SafeAreaView>
            <Text style={estilo.txtG}>
                O valor aleatório é {aleatorio}
            </Text>
        </SafeAreaView>
    )
}