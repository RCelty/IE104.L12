position = 4;

$(document).ready(function(){
    $(".favourite div.col-lg-3").slice( position ).hide();
    position = position + 1;
    $(".myDIV2").hide();
    $("#show-all-favourite").prop('checked', false);
    $("#show-all-mygame").prop('checked', false);
});

function myFunction(tagname) {
    var a = "." + tagname;
    console.log($(a).siblings(":visible"));
    if (!$(a + ":visible").length) {
        $(a).show();
    } else {
        $(a).hide();
    }
}

$(".buttonupdown-hide1").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".favourite").offset().top
    }, 500);
});

$(".buttonupdown-hide2").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".mygame").offset().top
    }, 500);
});

function dislike(tagname){
    var a = "#" + tagname;
    $(a).delay(300).hide(600);
    if (!$(".myDIV1:visible").length)
        $(".favourite div.col-lg-3").slice(position - 1 , position).removeClass("myDIV1").delay(900).show(600);
    position = position + 1;
}