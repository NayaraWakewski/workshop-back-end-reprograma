var inputValorHora = document.querySelector("#valor-hora")
console.log(inputValorHora)

var inputHorasProjeto = document.querySelector("#horas-projeto")
console.log(inputHorasProjeto )

var spanValorProjeto = document.querySelector("#resposta")
console.log(spanValorProjeto)

function calcular() {
    // Quantidade de Horas do Projeto atribuindo para numero.
    var qtdHorasProjeto = inputHorasProjeto.valueAsNumber
 
    //Aqui multiplicando as variaveis valor hora do projeto e quantidade de horas do projeto.
    var valorDaHora = (inputValorHora.valueAsNumber * qtdHorasProjeto).toFixed(2)

    //Aqui o resultado da multiplicacao das variaves

    spanValorProjeto.textContent = "O custo do projeto é: R$" + valorDaHora

    
}

//REPROGRAMA QUIS SAIR DO QUE FOI PROPOSTO, ME DESAFIAR A ENTENDER UM POUCO MAIS DE PROGRAMACAO, SEI QUE COPIEI. 
//ALGUNS CODIGOS DO QUE JA TINHA SIDO FEITO POR VOCES, MAIS APRENDI A COLOCAR MEU LINKEDIN NA PAGINA E SAI DO CONVENCIONAL, ISTO PARA MIM.
//JA FOI UMA GRANDE VITORIA, ESPERO SER UMA DAS ESCOLHIDAS PARA O PROJETO, MUITO OBRIGADA PELA OPORTUNIDADE, ESPERO QUE LEIAM MINHA MENSAGEM <3.