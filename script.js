
const minuto = document.querySelector('.minuto')
const segundo = document.querySelector('.segundo')
const milisegundo = document.querySelector('.milisegundo')
const iniciar = document.querySelector('#iniciar');
const pausar  = document.querySelector('#pausar');
const zerar   = document.querySelector('#zerar');

let minute = 0;
let second = 0;
let milisecond = 0;
let intervalo;

function trocarTimer(){
    //Atualiza os contadores de acordo com o tempo

    if(milisecond == 100){
        /*O milissegundo precisa ser definido em 100 
        pra contagem operar corretamente*/
        milisecond = 0
        second++
    }

    if(second == 60){
        second = 0
        minute++
    }

}

function exibir(){
    minuto.innerHTML = `${zeroE(minute)}:`
    segundo.innerHTML = `${zeroE(second)}:`
    milisegundo.innerHTML = `${zeroE(milisecond)}`
    milisecond++
    
    trocarTimer()

}

function zeroE(num){ 
    // Acrescenta um zero a esquerda
    if(num < 10){
        return `0${num}`

    } else{
        return num
    }
}

//Eventos de click

iniciar.addEventListener('click', () => {
   intervalo = setInterval(exibir,10)
   //Intervalo em 10 pra definir o milissegundo
})

pausar.addEventListener('click',()=>{
    clearInterval(intervalo)
})

zerar.addEventListener('click',()=>{
    minuto.innerHTML = '00:'
    segundo.innerHTML = '00:'
    milisegundo.innerHTML = '00'
    contador = 0;
    minute = 0;
    second = 0;
    milisecond = 0;
    clearInterval(intervalo)
})

