import React, { Component } from 'react'
import { Text, TextInput }from 'react-native'
import Estilo from '../estilo'

export default class Mega extends Component {

    // Forma 1de2 de Criar estado:
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         qtdeNumeros: props.qtdeNumeros + 1000
    //     }
    // }
    
    // Forma 2de2 de Criar estado:
    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    alterarQtdeNumero(qtde) {
        this.setState({qtdeNumeros: qtde})
    }

    render() {

        return (
            <>
                <Text style={Estilo.txtG} >
                    Gerador de Mega-Sena
                    {this.state.qtdeNumeros}
                </Text>
                <TextInput 
                    placeholder='Qtde de números'
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alterarQtdeNumero(qtde)}
                />
            </>
        )
    }
}