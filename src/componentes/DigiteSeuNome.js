import React, { useState } from 'react'
import { SafeAreaView, TextInput, Text } from 'react-native'
import Estilo from './estilo'


export default props => {
    const [nome, setNome] = useState('Teste')
    
    return (
        <SafeAreaView>
            <Text>
                {nome}
            </Text>
            {/* Abaixo é um componente Controlado */}
            <SafeAreaView>
                {/* <Text style={Estilo.txtG}>
                    Componente Controlado: 
                </Text> */}
                <TextInput 
                    placeholder='Digite seu Nome'
                    value={nome}
                    onChangeText={nome => setNome(nome)}
                />
            </SafeAreaView>
            {/* Abaixo é um componente Nao controlado */}
            {/* <SafeAreaView>
                <Text style={Estilo.txtG}>
                    Componente Nao controlado: 
                </Text>
                <TextInput 
                    placeholder='Digite seu Nome'
                    value={null}
                />
            </SafeAreaView> */}
        </SafeAreaView>
    )
}

