$(function() {

    $('.collapser').click(function() {
        var disp = $(this).html()
        var part = disp.substring(0, 4);
        var rem = disp.substring(5, disp.length);
        if (part == "Hide") {
            $(this).html("Show " + rem);
        }
        else {
            $(this).html("Hide " + rem);
        }
    });

    $('a.nav-link').click(function() {
        var link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top - 50
        }, 1000);
        $("#nav-1").collapse('hide');
    });

    function display() {
        var scroll = $(window).scrollTop()
        if (scroll >= $(window).height() / 3) {
            $(".navbar").addClass('bg-primary')
        }
        else {
            $(".navbar").removeClass('bg-primary')
        }
    }

    display();
    $(document).scroll(function() {
        display();
    });
});
