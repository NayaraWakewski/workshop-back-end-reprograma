var inputGanhoPorMes = document.querySelector("#ganho-mes")
console.log(inputGanhoPorMes)

var inputHorasPorDia = document.querySelector("#horas-dia")
console.log(inputHorasPorDia )

var spanHora = document.querySelector("#resposta")
console.log(spanHora)

function calcularValorHora() {
    // 22 sao os dias uteis no mes
    var qtdDeHorasMes = inputHorasPorDia.valueAsNumber * 22
 
    //Exemplo: sem toFixed = R$20,98765
    //Exemplo: com toFixed(2) = R$20,98

    //Aqui eu atribui uma variavel para o calculo de quanto ganha por hora
    var valorDaHora = (inputGanhoPorMes.valueAsNumber / qtdDeHorasMes).toFixed(2)

    //innerHTML insere o que voce quer dentro do HTML da pagina
    //textContent pega o valor do htm que voce quer
    //Aqui eu peguei o local onde a resposta está, que é o spanHora, e atribui
    //o resultado que é "R$" + valorDaHora

    spanHora.textContent = "R$" + valorDaHora

    
}

