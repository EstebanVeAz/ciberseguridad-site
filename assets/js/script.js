// funcion para mostrar/ocultar información adicional
$(document).ready(function () {
  $(".toggle-info").click(function () {
    const extraInfo = $(this).siblings(".extra-info");
    const isHidden = extraInfo.hasClass("d-none");
    extraInfo.toggleClass("d-none");
    $(this).text(isHidden ? "Ocultar" : "Ver más");
  });
});
