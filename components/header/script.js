$('input[type="button"]').mousedown(function () {
    $(this).css('background', '#08939b');
});
$('input[type="button"]').mouseup(function () {
    $(this).css('background', '#0dcfda');
});

$('#Username').click(function () {
    $('.userdropdown').fadeToggle('slow');
});

$("a .arrow").hide();

$(document).mouseup(function (event) {
    var container = $(".userdropdown");

    if (!container.is(event.target) // if the target of the click isn't the container...
        &&
        container.has(event.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});

$(function(){
    $(window).resize(function(){
        var windowSize = $(window).innerWidth();
        if(windowSize >= 900){
            $("a .arrow").hide();
            $('#navBar-icon').prop('checked', false);
        }
        else{
            $("a .arrow").show();
        }
    });
});

$('input[type="button"][value="Profile"]').click(function(){
    window.location.href='profile.html';
});

$('input[type="button"][value="Logout"]').click(function(){
    window.location.href='login.html';
});