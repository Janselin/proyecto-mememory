// Inicializacion de variables

let tarjetasDestapas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresivoId = null;

let clickAudio = new Audio ('./sonido/click.wav')
let ganarAudio = new Audio ('./sonido/ganar.wav')
let pierdeAudio = new Audio ('./sonido/pierde.wav')


//Documentos HTML

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('tiempo');


//Generar numero aleatorio
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

numeros =numeros.sort(()=>{return Math.random()-0.5});

console.log(numeros);

//Funciones

function contarTiempo(){
    tiempoRegresivoId = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if (timer == 0){
            clearInterval(tiempoRegresivoId);
            bloquerTarjetas();
            pierdeAudio.play ();
        }
    },1000)
}

function bloquerTarjetas (){
    for (let i = 0; i <= 15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="./img/${numeros[i]}.png" alt="">`; //numeros[i];
        tarjetaBloqueada.disabled = true
    }
}

//Funcion destapar

function destapar(id) {

    if(temporizador === false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapas++;
    console.log(tarjetasDestapas);

    if (tarjetasDestapas === 1) {
        // Mostrar el primer número
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML =`<img src="./img/${primerResultado}.png" alt="">`; //primerResultado;
        clickAudio.play();
        //Deshabilitar boton
        tarjeta1.disabled = true;
    } else if (tarjetasDestapas ===2){
        
        //Mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros [id]
        tarjeta2.innerHTML =`<img src="./img/${segundoResultado}.png" alt="">`; //segundoResultado;

        //Deshabilitar numero

        tarjeta2.disabled = true;

        //Incrementar movimientos

        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){

            //encerrar contador tarjetas destapadas

            tarjetasDestapas = 0;

            //Aumentar aciertos

            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😲`;
                mostrarTiempo.innerHTML = `Genial 🎊 solo demoraste ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😎🤘`;
                ganarAudio.play();
            }

        } else{
            //Mostrar momnetaneamente valores y volver a tapar
            pierdeAudio.play();
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapas = 0;
            },800);
        }
    }
}

// Añade un evento de clic a todos los botones
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            destapar(index);
        });
    });
});




