import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import Estilo from './estilo'

//Obs: Como só recebemos 1 parâmetro abaixo,
// ao invés de escrevermos (props) com parênteses poderemos escrever simplesmente props sem parenteses:
/* export default (props) => {
    console.warn(props)
    return (
        <SafeAreaView>
            <Text style={Estilo.txtG}>
                O valor {props.max} é maior que o valor {props.min}!
            </Text>
        </SafeAreaView>
    )
} */

export default props => (
    <SafeAreaView>
        <Text style={Estilo.txtG}>
            O valor {props.max} é maior que o valor {props.min}!
        </Text>
    </SafeAreaView>
)