import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from '../estilo'

import style from './NumeroEstilo'


export default ( {num} ) => {
    
    return (
        <SafeAreaView style={style.Container}>
            <Text style={[Estilo.txtG, style.Num]}>
                {num}
            </Text>
        </SafeAreaView>
    )
}

