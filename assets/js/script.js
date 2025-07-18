// funcion para mostrar/ocultar información adicional
$(document).ready(function () {
  $(".toggle-info").click(function () {
    const extraInfo = $(this).siblings(".extra-info");
    const isHidden = extraInfo.hasClass("d-none");
    extraInfo.toggleClass("d-none");
    $(this).text(isHidden ? "Ocultar" : "Ver más");
  });
});
// Validación del formulario de contacto
(() => {
  'use strict'
  const form = document.querySelector('#contactoForm');
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert('Mensaje enviado correctamente.');
    }
    form.classList.add('was-validated');
  }, false);
})();