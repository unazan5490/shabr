$(function() {
    
    var toggled = false;
    $('.collapser').click(function(){
        var disp = $(this).html()
        var part = disp.substring(0, 4);
        var rem = disp.substring(5,disp.length);
        if (part == "Hide"){
            $(this).html("Show " + rem);
        }else{
            $(this).html("Hide " + rem);
        }
    });
    
    $('.nav-item').click(function(){
        $("#nav-1").collapse('hide');
    });
    
    $(document).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log(scroll)
        if (scroll >= 650) {
            if (toggled==false){
                $(".navbar").toggleClass('bg-info')
                toggled = true;
            }
        }else{
            if (toggled==true){
                toggled = false;
                $(".navbar").toggleClass('bg-info')
            }
        }
    });
});
