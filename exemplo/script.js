//aqui eu tenho o input
var inputAno = document.querySelector("#ano")

//aqui eu peguei o campo da resposta pra colocar o VALOR do que está no input ANO
var paragrafoResposta = document.querySelector("#respostaAno")

//Aqui eu criei uma funcao com o nome "cliquei". que eu que escolhi
//dentro do paragrafoResposta eu queria que ele fizesse uma inserção do ano
function cliquei() {
    paragrafoResposta.innerHTML = inputAno.valueAsNumber
}
// valueAsNumber tranforma uma string (texto) em um NÚMERO no java


var titulo = document.querySelector("h1")

