

$(document).ready(function () {
    $('.enlaces').click(function () {
        var valor = $(this).attr('data-nombre');
        if (valor == 'calzados') {
            $('.calzados').show('1000');
        } else {
            $('.filtro').not('.' + valor).hide('1000');
            $('.filtro').filter('.' + valor).show('1000');
        }

        if (valor == 'bebidas') {
             $('.bebidas').show('1000');
        } else {
             $('.filtro').not('.' + valor).hide('1000');
         }

         if (valor == 'suplementos') {
             $('.suplementos').show('1000');
         } else {
             $('.filtro').not('.' + valor).hide('1000');
             // $('.filtro').filter('.' + valor).show('1000');
         }


        $('.ul .enlaces').click(function () {
            $(this).addClass('activo').siblings().removeClass('activo');
        });
    });
});