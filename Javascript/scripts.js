// Selecciona el botón de menú y la lista de navegación
const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu ul');

// Escucha el evento de clic en el botón
toggleButton.addEventListener('click', () => {
  // Alterna la clase "show" para mostrar/ocultar el menú
  menu.classList.toggle('show');
});
