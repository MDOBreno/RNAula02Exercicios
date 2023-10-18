import { StyleSheet } from 'react-native'

export default StyleSheet.create({
        FlexV2: {
            flex: 1, // Crescer no eixo principal/Main
            width: '100%',                   // Espacamento cruzado
            justifyContent: 'space-evenly', // Espacamento principal
            alignItems: "flex-end",// Crescer no eixo Cruzado
            backgroundColor: '#000',
        },
    }
)