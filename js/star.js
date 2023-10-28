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


const modal = document.getElementById('default-modal');
let modalBackdrops = document.querySelectorAll('div[modal-backdrop]');
let body = document.body;

function showModal(id_modal) {
    console.log('Llegué al click');

    // Eliminar los elementos con atributo modal-backdrop
    modalBackdrops.forEach(function (element) {
        element.remove();
    });
    // Agregar clases al elemento modal
    modal.classList.remove('hidden');
    modal.classList.add('modal-active', 'flex');
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    // Crear y agregar el elemento modal-backdrop
    const backdrop = document.createElement('div');
    backdrop.classList.add('bg-gray-900', 'bg-opacity-50', 'dark:bg-opacity-80', 'fixed', 'inset-0', 'z-40');
    backdrop.setAttribute('modal-backdrop', '');
    body.appendChild(backdrop);
}


function closeModal(id_modal){
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    // Eliminar los elementos con el atributo modal-backdrop con un efecto de desvanecimiento
    document.querySelectorAll('div[modal-backdrop]').forEach(function(element) {
        element.style.transition = 'opacity 0.5s';
        element.style.opacity = '0';

        // Una vez completada la animación de desvanecimiento, eliminar el elemento
        element.addEventListener('transitionend', function() {
            element.remove();
        });
    });
    location.reload();
}

