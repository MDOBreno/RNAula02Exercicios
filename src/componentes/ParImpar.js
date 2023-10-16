import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'


export default ({num=0}) => {

    //Forma 01
    // if ((num % 2) === 0) {
    //     return (
    //         <SafeAreaView>
    //             <Text style={Estilo.txtG}>
    //                 O resultado é:
    //             </Text>
    //             <Text style={Estilo.txtG}>
    //                 Par
    //             </Text>
    //         </SafeAreaView>
    //     )
    // } else {
    //     return (
    //         <SafeAreaView>
    //             <Text style={Estilo.txtG}>
    //                 O resultado é:
    //             </Text>
    //             <Text style={Estilo.txtG}>
    //                 Impar
    //             </Text>
    //         </SafeAreaView>
    //     )
    // }

    //Forma 02
    return (
        <SafeAreaView>
            <Text style={Estilo.txtG}>
                O resultado é:
            </Text>
            {num % 2 === 0
                ? <Text style={Estilo.txtG}>Par</Text>
                : <Text style={Estilo.txtG}>Impar</Text>
                //Obs: caso ao em vez de eu comocar uma Tag (e.g.: <Text>) eu colocar 'false' nada sera renderizado
            }
            
        </SafeAreaView>
    )

}

