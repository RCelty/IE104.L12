$('.username #navthing .userdropdown .formholder input[type="button"]').mousedown(function () {
    $(this).css('background', '#08939b');
});
$('.username #navthing .userdropdown .formholder input[type="button"]').mouseup(function () {
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
        if(windowSize > 896){
            $("a .arrow").hide();
            $('#navBar-icon').prop('checked', false);
            $("#dropdown-son").css('margin-left', $('#dropdown-father').width() + 'px');
        }
        else{
            $("a .arrow").show();
            $("#dropdown-son").css('margin-left', 0 + 'px');
        }
    });
});

$('#navthing input[type="button"][value="Profile"]').click(function(){
    window.location.href='profile.html';
});

$('#navthing input[type="button"][value="Logout"]').click(function(){
    window.location.href='login.html';
});

$("#dropdown-son").css('margin-left', $('#dropdown-father').width() + 'px');

$(document).hover(function () {
    var container = $("#Store-menu-hover");

    if (!container.is(event.target) )
    {
        container.scrollTop(0);
    }
});