//Comentario

/*]
comentario
de
linhas
*/

//Tipos de dados
/**
 * Number => Int Float NaN
 * String => Texto
 * Boolean => True False
 * Null => Vazio
 * Undefined => Não tem definição
 */

//Converter tipos
/**
 * var = 4
 * De num pra string
 * var.toString()
 * 
 * De string para Num
 * parseInt(var)
 * ou
 * parseFloat(var)
 */

//Operadores aritiméticos
/**
 * +
 * -
 * /
 * *
 * %
 * **
 */

//Operadores relacional
/**
 * ==
 * ===
 * !=
 * >
 * <
 * >=
 * <=
 */

//Operadores relacional
/**
 * ! = negação
 * && = conjunção
 * || = disjunção
 */

// Variaveis
/**
 * Var - vc pode redefinir - escopo global
 * Let - vc não pode redefinir - escopo local
 * Const - info não alteravel
 */

//Outros
/**
 * Array = Lista
 * Object = Dicionario
 * Json = JavaScript Object Notation
 */

//Funções
/**
 * function nome_da_função(parametros)
 * {
 * comandos
 * }
 * 
 */

//condições
/**
 * if(condição_a)
 * {
 * Plano A
 * }
 * else if(Condição_b)
 * {
 * Plano b
 * }
 * Else
 * {
 * plano resto
 * }
 */

//estrutura de repetição
/**
 * for i in range(10)
 * 
 * for(let i = 1; i < 11; i++)
 * {
 * o que tem que ser repetido
 * }
 */

//window.alert(soma)
// console
// document.write(soma)
// document.write(`<h1> ${soma} </h1>`)
// console.log(soma)

// let resposta = window.prompt('digite um numero')
// console.log(resposta)
// console.write(resposta)

// let resposta = window.prompt('digite um numero: ')
// valor = resposta % 2

// if(valor == 1)
// {
//     window.alert('Este valor é impar')
// }
// else
// {
//     window.alert('Este valor é par')
// }



// let valor = n1 * 1
// let valor1 = n1 * 2
// let valor2 = n1 * 3
// let valor3 = n1 * 4
// let valor4 = n1 * 5
// let valor5 = n1 * 6
// let valor6 = n1 * 7
// let valor7 = n1 * 8
// let valor8 = n1 * 9
// let valor9 = n1 * 10

// window.alert(valor)
// window.alert(valor1)
// window.alert(valor2)
// window.alert(valor3)
// window.alert(valor4)
// window.alert(valor5)
// window.alert(valor6)
// window.alert(valor7)
// window.alert(valor8)
// window.alert(valor9)

let n1 = parseInt(window.prompt('digite um numero: '))
 
 for(let i = 1; i < 11; i++)
 {
    let valor = n1 * i
    // window.alert(valor)
    document.write(valor)
 }