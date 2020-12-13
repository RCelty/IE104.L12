$(document).ready(function(){
    $("#myDIV1").hide();
    $("#myDIV2").hide();
    $("#show-all-favourite").prop('checked', false);
    $("#show-all-mygame").prop('checked', false);
});

function myFunction(tagname) {
    var a = "#" + tagname;
    console.log(a);
    var x = document.getElementById(tagname);

    if (x.style.display === "none") {
        $(a).show();
    } else {
        $(a).hide();
    }
}

$(".buttonupdown-hide1").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".favourite").offset().top
    }, 1000);
});

$(".buttonupdown-hide2").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".mygame").offset().top
    }, 1000);
});