
// console.log('teste')

class Produto {}
// console.log("Em js uma classe é na verdade o tipo: " + typeof Produto)

// Faca testes em JS salvando esse arquivo e depois:     Control+Alt+'N'   , e o resultado é exibido na SAIDA , Graças a extensão do VC Code chamada de "Code runner"

function Produto2(nome) {
    this.nome = nome
}

const p1 =new Produto2('Caneta')
const p2 =new Produto2('Caderno')

// console.log(p1.nome, p2.nome)
// console.log(typeof Produto2)
// console.log(typeof p1)
// console.log(typeof p2)

const props = { min:1, max: 60 }
const { min, max } = props
// console.log(min)
// console.log(max)

//Obs: reparar que é mesmo definindo com "let"("variável") , o Object.freeze() tratar ele como 'constante'('congelado'):
let props1 = Object.freeze({min1: 1, max1:60 })
props1.min1 += 1000
// console.log(props1.min1)
// mas quando eu criar uma variável recebendo este valor posso alterar "Essa cópia" a vontade:
let {min1} = props1
min1 += 1000
// console.log(min1)

function useState(inicial) {
    return (
        [inicial, function() {
            console.log('chamou')
        }]
    )
} 
// const array = useState(10)
// console.log(array[0])
// array[1]()
// const [valor, setValor] = useState('teste')
// console.log(valor)
// setValor()


console.log(11    + " " + typeof(11))
console.log('11'  + " " + typeof('11'))
console.log(+'11' + " " + typeof(+'11')) // Colocar um '+' na frente de uma string transforma-o em tipo numerico 

console.log(Array(3).fill())
console.log(Array(3).fill().reduce(() => console.log('Epa'), []))