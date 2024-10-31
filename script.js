// Función para alternar el menú lateral
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0"; // Cierra el menú
    } else {
        sidebar.style.width = "250px"; // Abre el menú
    }
}

// Agrega un desplazamiento suave a los enlaces
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Obtiene el destino del enlace
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Desplazamiento suave
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Cierra el menú
        toggleMenu();
    });
});
