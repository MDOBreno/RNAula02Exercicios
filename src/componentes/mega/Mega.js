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

    //     //Forma [1de3 Parte1de2] de usar a onChangeText: A função bind() serve para informar ao js 
    //     // a quem se refere o termo 'this' dentro da funcao alterarQtdeNumero():
    //     // this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    // }
    
    // Forma 2de2 de Criar estado:
    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    //Forma [2de3 Parte1de2] de usar a onChangeText:
    // alterarQtdeNumero(qtde) {
    //     this.setState({qtdeNumeros: qtde})
    // }

    //Forma [3de3 Parte1de2] de usar a onChangeText:
    alterarQtdeNumero = (qtde) => {
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
                    keyboardType={'numeric'}
                    style={
                        {
                            borderBottomWidth: 1,
                        }
                    }
                    placeholder='Qtde de números'
                    value={this.state.qtdeNumeros}

                    //Forma [1de3 Parte2de2] e [2de3 Parte2de2] de usar a onChangeText:
                    // onChangeText={qtde => this.alterarQtdeNumero(qtde)}

                    //Forma [3de3 Parte2de2] de usar a onChangeText:
                    onChangeText={this.alterarQtdeNumero}
                />
            </>
        )
    }
}