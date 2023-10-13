import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'

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

import ContadorV2 from './componentes/contador/ContadorV2'
// import Pai from './componentes/indireta/Pai'
// import Pai from './componentes/direta/Pai'
// import Contador from './componentes/Contador'
// import Botao from './componentes/Botao'
// import Titulo from './componentes/Titulo'
// import Aleatorio from './componentes/Aleatorio'
// import MinMax from './componentes/MinMax'

//Reparar que quando importamos dando um nome qualquer(Ex: X) ele importa com a funcao/constante default, 
// ja com {} tem que ser o nome exato
// import CompPadrao, { Comp1, Comp2 } from './componentes/Multi'
// import Primeiro from './componentes/Primeiro'


export default ()=> (
    <SafeAreaView style={style.App}>
        {/* <View> */}
            <ContadorV2 />
            {/* 
            <Pai />
            <Pai />
            <Contador inicial={100} passo={13} />
            <Contador />
            <Botao />
            <Titulo principal="Cadastro Produto"
                    secundario="Tela de cadastro do produto" />
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/> 
            <MinMax min={3} max={20}/>
            <MinMax min={1} max={94}/>
            <CompPadrao />
            <Comp1 />
            <Comp2 />

            <Primeiro /> 
            */}

            {/* <Text>{1+1}</Text> */}
        {/* </View> */}
    </SafeAreaView>
)    

const style = StyleSheet.create({
        App: {
            // backgroundColor: '#A00',
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
        }
    }
)