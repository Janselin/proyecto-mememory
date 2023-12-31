import * as juego from './juego.js';


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
});