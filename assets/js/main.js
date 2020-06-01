const hour = document.querySelector('.hour h1')
const minutes = document.querySelector('.minutes h1')
const seconds = document.querySelector('.seconds h1')
const msg = document.querySelector('.date_container h1')
const p = document.querySelector('.date_container p') 

function zeroAesquerda(num) { // Adiciona um zero à esquerda.

    return num >= 10 ? num : `0${num}`
}

function hora() { // Exibe as horas.

    const data = new Date() 
    console.log(data.toLocaleTimeString())  

    const hora = zeroAesquerda(data.getHours())
    const min = zeroAesquerda(data.getMinutes())
    const seg = zeroAesquerda(data.getSeconds())

    hour.innerHTML = hora, minutes.innerHTML = min, seconds.innerHTML = seg    
}

function exibeDiaSemana(dias) { // Exibe o dia da semana.  

    const data = new Date()
    const obter_dia = data.getDay()
    
    const lista_dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira']

    return dias = lista_dias[obter_dia]          
}

function exibeDia(dia) { // Exibe o dia do mês

    const data = new Date()
    return dia = data.getDate()
}

function exibeMês(mês) { // Exibe o mês

    const data = new Date()
    const verificar_mês = data.getDate() + 1
    const lista_meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return mês = lista_meses[verificar_mês]  
}

function exibeAno(ano) { // Exibe o ano.

    const data = new Date()
    return ano = data.getFullYear()
}

function mensagem() { // Exibe a mensagem.

    msg.innerHTML = exibeDiaSemana().toUpperCase(), p.innerHTML = `${exibeDia()} de ${exibeMês()} ${exibeAno()}`    
} 
mensagem()
hora()
setInterval(function () {hora()}, 1000) // Atualizará o relógio a cada 1s
