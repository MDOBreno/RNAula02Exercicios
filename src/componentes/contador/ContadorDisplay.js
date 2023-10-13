import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <>
            <SafeAreaView style={Estilo.myDisplay}>
                <Text style={[Estilo.txtG, Estilo.myDisplayText]}>
                    {props.num}
                </Text>
            </SafeAreaView>
        </>
    )
}

