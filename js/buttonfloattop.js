// Seleccionamos el botón
const botonSubir = document.getElementById("btnSubir");

// Función flecha para subir al top de la página
const subirAlTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Desplazamiento suave
    });
};

// Asignamos la función al evento click del botón
botonSubir.addEventListener("click", subirAlTop);

// Mostrar u ocultar el botón según la posición del scroll
window.addEventListener("scroll", () => {
    if (window.window.scrollY > 300) {
        botonSubir.style.display = "block";
    } else {
        botonSubir.style.display = "none";
    }
});

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
            else {
                entry.target.classList.remove("visible");
                
            }
        });
    },
    {
        threshold: 0.1,
    }
);

sections.forEach((section) => {
    observer.observe(section);
});
