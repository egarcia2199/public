// Obtén todos los elementos con la clase "animado"
const animado = document.querySelectorAll(".animado");

// Función para mostrar los elementos al desplazarse
function displayOnScroll() {
    const scrollTop = window.scrollY;

    for (let i = 0; i < animado.length; i++) {
        const alturaAnim = animado[i].offsetTop;

        if (alturaAnim -500 < scrollTop) {
            animado[i].style.opacity = 1;
        }
    }
}

// Agrega el evento de desplazamiento al objeto window
window.addEventListener("scroll", displayOnScroll);