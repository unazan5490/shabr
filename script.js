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
    
    //initiate pos to 0 if no value yet (new to site)
    if (localStorage.getItem("pos") == null) {
        localStorage.setItem('pos', $(window).scrollTop());
    }
    
    //as page (re)loads, compare value to see if navbar needs to display
    if (localStorage.getItem('pos') >= $(window).height() / 3) {
        $(".navbar").addClass('bg-primary')
    }
    
    //when user is scrolling through the page, check their new position
    $(document).scroll(function() {
        localStorage.setItem('pos', $(window).scrollTop());
        var scroll = localStorage.getItem('pos');
        if (scroll >= $(window).height() / 3) {
            $(".navbar").addClass('bg-primary')
        }
        else {
            $(".navbar").removeClass('bg-primary')
        }
    });
});
