document.addEventListener("DOMContentLoaded", function () {
    const navBurger = document.getElementById("navBurger");
    const navItems = document.getElementById("navItems");

    navBurger.addEventListener("click", function () {
        // Alternar la clase 'active' en el menú
        navItems.classList.toggle("active");

        // Opcional: cambiar el icono de hamburguesa a una X cuando el menú está abierto
        this.classList.toggle("open");
    });
});
