import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'
import If from './if'


// export default ({ usuario = {} }) => {
//Obs: É mais seguro recibo objetos Como nas 2 linhas de codigo n comentadas abaixo em vez da
// primera linha de codigo comentada acima, pois a tratamento para a possibilidade de receber 
// null como argumento/rpopriedade sem sem quebrar a renderizacao da Ui.
export default props => {
    const usuario = props.usuario || {}

    return (
        <>
            {/* <If teste={usuario && Object.keys(usuario).length !== 0} > */}
            <If teste={usuario && usuario.nome && usuario.email} >
                <Text style={Estilo.txtG}>
                    Usuario Logado:
                </Text>
                <Text style={Estilo.txtG}>
                    {usuario.nome} - {usuario.email}
                </Text>

            </If>
            
        </>
    )
}

