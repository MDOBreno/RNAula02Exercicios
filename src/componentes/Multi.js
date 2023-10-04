import React from 'react'
import { Text, SafeAreaView } from 'react-native'

// esse aqui é uma aula sobre o sistema de módulos do EcmaScript6

//Formato 1 de Definir um componente padrão para exportação:
//Obs: quando se define a função default ela não necessita ter um nome definido, coloquei apenas para deixar iguel ao professor.
// , a aí isso se dá o nome de "função anônima"
/*export default function Comp() {
    return <Text>Comp #Oficial</Text>
}*/

//Formato 2 de Definir um componente padrão para exportação: Sem precisar colocar a exportação em cada uma das funções 
function Comp() {
    return <Text>Comp #Oficial</Text>
}
export default Comp

//Formato 1
/* function Comp1() {
    return <Text>Comp #01</Text>
}
function Comp2() {
    return <Text>Comp #02</Text>
}
export { Comp1, Comp2 }  */

//Formato 2: Repare que assim qexige que a funcao(ou se vc preferir: a constante) tenha um nome para isso funcionar
/* export function Comp1() {
    return <Text>Comp #01</Text>
}
export function Comp2() {
    return <Text>Comp #02</Text>
} */

//Formato 3: Sem precisar colocar a exportação em cada uma das funções 
function Comp1() {
    return <Text>Comp #01</Text>
}
function Comp2() {
    return <Text>Comp #02</Text>
}
export { Comp1, Comp2 }
