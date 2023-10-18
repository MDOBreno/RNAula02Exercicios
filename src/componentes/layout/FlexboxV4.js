import React from 'react'
import { SafeAreaView, View } from 'react-native'
import style from './FlexboxV4Estilo'

// import Quadrado from './Quadrado'



export default props => {
    
    return (
        <SafeAreaView style={style.FlexV4}>
            <View style={style.V0}>

            </View>
            <View style={style.V1}>

            </View>
            <View style={style.V2}>

            </View>

            {/* <Quadrado cor='#ff801a' lado={20} />
            <Quadrado cor='#50d1f6' lado={30} />
            <Quadrado cor='#dd22c1' lado={40} />
            <Quadrado cor='#8312ed' lado={50} />
            <Quadrado cor='#36c9a7' lado={60} /> */}
        </SafeAreaView>
    )
}

