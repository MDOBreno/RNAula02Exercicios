import React, { Fragment } from "react";
import { Text } from "react-native";
import Estilo from "./estilo"; 

//Obs1: Se preferir escrever as tags como [ ou <Fragment> ou <> ] em vez de <React.Fragment> basta da um import dessa abaixo:
// import { Fragment } from "react";

export default props => {

    return (
        //      Obs2: Na linha abaixo um fragment pode tando ser escrito como [ ou <React.Fragment> ou <Fragment> ou <> ]
        <React.Fragment key="1">
            {/* Obs3: A Tag <> é a unica que impede a insercao de propriedades como a prop "Key" acima */}
            <Text style={Estilo.txtG}>
                {props.principal}
            </Text>
            <Text>
                {props.secundario}
            </Text>
        </React.Fragment>
        
    )
}
