import React from 'react'
import { Text, SafeAreaView } from 'react-native'

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


import { View } from 'react-native'

import Primeiro from './componentes/Primeiro'


export default ()=> (
    <SafeAreaView>
        <View>
            {/* <Text>{1+1}</Text> */}
            <Primeiro/>
        </View>
    </SafeAreaView>
)    
