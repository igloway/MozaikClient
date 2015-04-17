/**
  * Basic scripts
  */
$(document).ready(function(){

    if (window.devicePixelRatio > 1) {
        var images = $('img');
        images.each(function(i) {
            var lowres = $(this).attr('src');
            var highres = lowres.replace(".", "@2x.");
            $(this).attr('src', highres);
        });
    }

    $("#floating-menu > a").click(function(){
        var $this = $(this);
        var $menu = $this.parent('div#floating-menu');
        if($menu.hasClass('open')){
            $menu.removeClass('open');
        } else {
            $menu.addClass('open');
        }
    });

});