import React from 'react'
import { View, SafeAreaView } from 'react-native'

//Forma de escrever 01
/* function App() {
    return  <SafeAreaView>
                <Text>Primeiro Componente</Text>
            </SafeAreaView>
}
export default App */

//Forma de escrever 02
// export default ()=> <SafeAreaView>
//                         <Text>Primeiro Componente!!!</Text>
//                     </SafeAreaView>


//Reparar que quando importamos dando um nome qualquer(Ex: X) ele importa com a funcao/constante default, 
// ja com {} tem que ser o nome exato
import CompPadrao, { Comp1, Comp2 } from './componentes/Multi'
import Primeiro from './componentes/Primeiro'


export default ()=> (
    <SafeAreaView>
        <View>
            <CompPadrao />
            <Comp1/>
            <Comp2/>

            <Primeiro/>

            {/* <Text>{1+1}</Text> */}
        </View>
    </SafeAreaView>
)    
