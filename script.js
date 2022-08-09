// let idadadeDependente = 15
// /*
// if (idadadeDependente >= 13){
//     if(idadadeDependente>=18){
//         console.log("Seu dependete pode ter um cartão proprio")
//     }else{
//         console.log("Seu dependente ja ter seu cartão crédito ao seu")
//     }
// }else{
//     console.log("Consulte outras possibilidades labank")
// }

// if(idadadeDependente >= 13 && idadadeDependente<= 17){
// console.log("Seu dependete pode ter um cartão proprio")
// }else{
//     console.log("Consulte outras possibilidades labank")
// }

// //ternario

// idadadeDependente === 13 ? console.log("A idade do depentene é 13 e já pode ter cartão"):console.log("Consulte outras possibilidades")

// //switch case

// let cartao =Number(prompt ("Solicitação de cartão de credito selecione uma opção: \n 1-facil \n 2-black \n 3-platinun\n 4-master gold"))

// switch(cartao){
//     case 1:
//         console.log("Cartão facil adquirido.")
//         break;
//     case 2:
//         console.log("Cartão Black adquirido")
//         break
//     case 3:
//         console.log("Cartão Platinum adquirido")
//         break
//     case 4:
//         console.log("Cartão Master Gold adquirido")
//         break;
//     default:
//         console.log("Escolha uma das opções disponives")
// }//fim aula guiada
// */

// //exercicio de fixação

// //exercicio 1
// /*
// let codigo = prompt("Este numero é divisil por 2 e por 3?")

// if(codigo %2 === 0 && codigo %3 ===0){
//     console.log("Sim é divisil por 2")
// }else{
//     console.log("Não divisivil por 2 e nem 3")
// }

// let codigo = prompt("Este numero é divisil por 2 e por 3?")

// if (codigo )


// //exercicio 2

// let numeroSurpresa = Number(prompt("Escolha um numero de 1 a 30?"))
// numeroSurpresa === 30 ? console.log("UFA EU ACERTEI"):console.log("Não foi dessa vez tente novamente")

// */
// //exercicio 3

let numeroSurpresa = Number(prompt("verificar se tem o numero 6, 12, 18, 24 ou 30"))

switch (numeroSurpresa){
    case 6:
        console.log("Você escolheu 6")
        break;
    case 12:
        console.log("Você escolheu 12")
        break
    case 18:
        console.log("Você escolheu 18")
        break
    case 24:
        console.log("Você escolheu 24")
        break;
    case 30:
        console.log("Você escolheu 30")
        break;
    default:
        console.log("O número é maior que 30 ou menor que 6")
}

