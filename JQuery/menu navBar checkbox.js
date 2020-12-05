$(function(){
    $(window).resize(function(){
        var windowSize = $(window).innerWidth();
        if(windowSize >= 900){
            $('#navBar-icon').prop('checked', false);
        }
    });
});