import React, { Component } from 'react'
import { Text, TextInput, Button }from 'react-native'
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
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    //Forma [2de3 Parte1de2] de usar a onChangeText:
    // alterarQtdeNumero(qtde) {
    //     this.setState({qtdeNumeros: qtde})
    // }

    //Forma [3de3 Parte1de2] de usar a onChangeText:
    alterarQtdeNumero = (qtde) => {
        this.setState({qtdeNumeros: +qtde})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    //Forma 1de2 de fazer recursao da geracao do array
    gerarNumeros = () => {
        const { qtdeNumeros } =  this.state
        const numeros = []

        for (let i = 0; i < qtdeNumeros; i++) {
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }

        numeros.sort((a, b) => a-b)
        this.setState({ numeros })
    }
    
    //Forma 2de2 de fazer recursao da geracao do array
    // gerarNumeros = () => {
    //     const numeros = Array(this.state.qtdeNumeros)
    //         .fill()
    //         .reduce(
    //             n => [...n, this.gerarNumeroNaoContido(n)], 
    //             []
    //         )
    //         .sort((a, b) => a-b)
    //     this.setState({numeros})
    // }

    render() {

        return (
            <>
                <Text style={Estilo.txtG} >
                    Gerador de Mega-Sena
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={
                        {
                            borderBottomWidth: 1,
                        }
                    }
                    placeholder='Qtde de números'
                    value={`${this.state.qtdeNumeros}`}

                    //Forma [1de3 Parte2de2] e [2de3 Parte2de2] de usar a onChangeText:
                    // onChangeText={qtde => this.alterarQtdeNumero(qtde)}

                    //Forma [3de3 Parte2de2] de usar a onChangeText:
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <Text>
                    {this.state.numeros.join(',')}
                </Text>
            </>
        )
    }
}