//Repare que até este momento(Secao03Aula39 - Renderização condicional 02), estou 
// primeiro arquivo que nós estamos criando apenas Javascript, sem ser JSX(pois 
// nós não estamos importando nenhum React e nem o ReactNative)
export default props => {
    if (props.teste) {
        return props.children
    } else {
        return false
    }
}