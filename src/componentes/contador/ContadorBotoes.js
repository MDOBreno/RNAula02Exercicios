import React from 'react'
import { SafeAreaView, Button } from 'react-native'
import Estilo from '../estilo'


export default props => {
    
    return (
        <SafeAreaView style={Estilo.botoes}>
            <Button 
                title='+' 
                onPress={props.inc}
            />
            <Button 
                title='-' 
                onPress={props.dec}
            />
        </SafeAreaView>
    )
}

