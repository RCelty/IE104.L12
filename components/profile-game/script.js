$(document).ready(function(){
    $("#myDIV").hide();
    $("#show-all").prop('checked', false);
});

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        $("#myDIV").show();
    } else {
        $("#myDIV").hide();
    }
}