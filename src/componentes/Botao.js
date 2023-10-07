import React from "react";
import { SafeAreaView, Button } from "react-native";
import estilo from "./estilo";


export default props => {

    function executar0() {
        return function() {
            console.warn('Exec #00!!!')
        }
    }
    function executar() {
        console.warn('Exec #01!!!')
    }
    return (
        <>
            
            {/* Forma 0: Na definicao da funcao coloca como retorno a funcao do botao, e tb no onPress={executar()} */}
            <Button 
                title="Executar! #00" 
                onPress={executar0()}
            />
            {/* Forma 1: Na definicao da funcao colocar as acoes do botaodo botao sem retorno, e tb no onPress={executar} */}
            <Button
                title="Executar! #01" 
                onPress={executar}
            />
            {/* Forma 2('function expression'): Por a definicao da funcao com as acoes no onPress={executar} */}
            <Button
                title="Executar! #02" 
                onPress={
                    function() {
                        console.warn('Exec #02!!!')
                    }
                }
            />
            {/* Forma 3('arrow function'): Por a definicao da arrow function com as acoes no onPress={executar} */}
            <Button
                title="Executar! #03" 
                onPress={
                    () => {
                        console.warn('Exec #03!!!')
                    }
                }
            />
        </>
    )
}