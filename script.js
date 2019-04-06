$(function() {
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
});
