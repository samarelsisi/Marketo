$("li a").click(function() {
    $('html , body').animate({
        screenTop: $('#' + $(this).data("value")).offset().to
    }, 2000);

    console.log($(this).data("value"))
})