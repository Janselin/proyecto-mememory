//Variables
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

let clickAudio = new Audio('./sonido/click.wav');
let ganarAudio = new Audio('./sonido/ganar.wav');
let pierdeAudio = new Audio('./sonido/pierde.wav');

// Documentos HTML
const cartas = document.querySelectorAll('.cartas');
const empezar = document.querySelector('.empezar');
const buttons = document.querySelectorAll("button");
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('tiempo');

// Eventos

// Generar número aleatorio
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => Math.random() - 0.5);


//Funciones

//Iniciar Jugo desabilitando(bloquear) las cartas
function iniciarJuego() {
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].disabled = true;
    }
    empezar.style.display = "block";
}

//desbloquear cartas
function desbloquear() {
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].disabled = false;
    }
}

//Cronometro
function contarTiempo() {
    desbloquear();
    empezar.classList.add('disabled');
    tiempoRegresivoId = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if (timer == 0) {
            clearInterval(tiempoRegresivoId);
            perdiste();
            bloquerTarjetas();
            pierdeAudio.play();
        }
    }, 1000);
}

//Bloquear cartas(cuando estas jugando)
function bloquerTarjetas() {
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="./img/${numeros[i]}.png" alt="">`;
        tarjetaBloqueada.disabled = true;
    }
}

//Mensaje cuando ganas
function ganaste() {
    Swal.fire({
        icon: "success",
        title: "¡Ganaste!",
        text: `Genial 🎊 solo demoraste ${timerInicial - timer} segundos`,
        confirmButtonText: "OK",
    }).then((result) => {
        if (result.isConfirmed) {
            if (result.isConfirmed) {
                location.reload();
            }
        }
    });
}

//Mensaje cuando pierdes
function perdiste() {
    Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se te acabó el tiempo 😿',
            }).then((resultado) => {
                if (resultado.isConfirmed) {
                    location.reload();
                }
            });
}

//Logica del juego 
function destapar(id) {
    if (temporizador === false) {
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapas++;
    console.log(tarjetasDestapas);

    if (tarjetasDestapas === 1) {
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = `<img src="./img/${primerResultado}.png" alt="">`;
        clickAudio.play();
        tarjeta1.disabled = true;
    } else if (tarjetasDestapas === 2) {
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="./img/${segundoResultado}.png" alt="">`;
        tarjeta2.disabled = true;
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if (primerResultado == segundoResultado) {
            tarjetasDestapas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if (aciertos == 8) {
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😲`;
                mostrarTiempo.innerHTML = `Genial 🎊 solo demoraste ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😎🤘`;
                ganarAudio.play();
                ganaste();
            }
        } else {
            pierdeAudio.play();
            setTimeout(() => {
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapas = 0;
            }, 800);
        }
    }
}

export { iniciarJuego, desbloquear, buttons, destapar, empezar, cartas };