import React from "react";
import { Text, SafeAreaView } from "react-native";
import estilo from "./estilo";

// Forma 1 de desconstruir/receber As propriedades dos argumentos: (Obs: reparar a primeira linha abaixo)
// export default (props) => {
//     //Obs: Repare nas três linhas abaixo que os argumentos de props É apenas leitura(não podem ser alterados)
//     props.min += 1000
//     props.max += 2000
//     //const { min, max } = props
//     let { min, max } = props
//     min += 1000
//     max += 2000
//     // const { min, max } = props
//     return (
//         <Text>{min} e {max}</Text>
//     )
// }

// Forma 2 de desconstruir/receber As propriedades dos argumentos: (Obs: reparar as duas linhas abaixo)
export default ({ min, max }) => {
    const delta = (max - min + 1)
    let aleatorio = Math.floor(Math.random() * delta + min)
    setTimeout(
        () => (
            aleatorio = Math.floor(Math.random() * delta + min), 
            2000
        )
    )
    return (
        <SafeAreaView>
            <Text style={estilo.txtG}>
                O valor aleatório é {aleatorio}
            </Text>
        </SafeAreaView>
    )
}