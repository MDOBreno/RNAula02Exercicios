import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import Estilo from './estilo'

// Como usar um alerta chamado de "yellow box":
/*export default () => {
    console.warn('Opa!')
    return (
        <SafeAreaView>
            <Text style={Estilo.txtG}>Texto!</Text>
        </SafeAreaView>
    )
} */

export default () => (
    <SafeAreaView>
        <Text style={Estilo.txtG}>Texto!</Text>
    </SafeAreaView>
)
