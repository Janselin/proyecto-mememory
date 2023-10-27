import * as juego from './juego.js';

const empezar = document.querySelector('.empezar');
const empezarMobile = document.querySelector('.empezar-mobile');

juego.iniciarJuego();

document.addEventListener("DOMContentLoaded", function () {
    if (juego.empezar) {
        juego.empezar.addEventListener("click", function () {
            juego.desbloquear();            
            empezar.style="display:none";                   
            juego.buttons.forEach((button, index) => {
                button.addEventListener("click", () => {
                    juego.destapar(index);
                });
            });
        });
    }

    if (juego.empezarMobile) {
        juego.empezarMobile.addEventListener("click", function () {
            juego.desbloquear(); 
            console.log('Juego desbloqueado')           
            empezarMobile.style="display:none";                   
            juego.buttons.forEach((button, index) => {
                button.addEventListener("click", () => {
                    juego.destapar(index);
                });
            });
        });
    }
});

