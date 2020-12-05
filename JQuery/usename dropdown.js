$('input[type="button"]').mousedown(function () {
    $(this).css('background', '#2ecc71');
});
$('input[type="button"]').mouseup(function () {
    $(this).css('background', '#1abc9c');
});

$('#Usename').click(function () {
    $('.dropdown').fadeToggle('slow');
    $(this).toggleClass('green');
});



$(document).mouseup(function (e) {
    var container = $(".dropdown");

    if (!container.is(e.target) // if the target of the click isn't the container...
        &&
        container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $('#Usename').removeClass('green');
    }
});