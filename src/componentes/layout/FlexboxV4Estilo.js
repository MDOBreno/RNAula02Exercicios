import { StyleSheet } from 'react-native'

export default StyleSheet.create({
        FlexV4: {
            flexGrow: 1,
            // flexDirection: 'row',           // Direcao da listagem
            // justifyContent: 'space-evenly', // Espacamento principal
            // alignItems: "flex-start",       // Crescer no eixo Cruzado
            // height: 350,
            width: 100,                  // Espacamento cruzado
            backgroundColor: '#000',
        },
        V0: {
            height: 300,
            backgroundColor: '#36c9a7',
        },
        V1: {
            backgroundColor: '#ff801a',
            flexGrow: 3, // Obs em muitos casos flexGrow e flex sao iguais
        },
        V2: {
            backgroundColor: '#dd22c1',
            flexGrow: 1,
        },
    }
)