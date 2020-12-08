$('input[type="button"]').mousedown(function () {
    $(this).css('background', '#08939b');
});
$('input[type="button"]').mouseup(function () {
    $(this).css('background', '#0dcfda');
});

$('#Username').click(function () {
    $('.userdropdown').fadeToggle('slow');
    $(this).toggleClass('c-blue');
});

$(document).mouseup(function (e) {
    var container = $(".userdropdown");

    if (!container.is(e.target) // if the target of the click isn't the container...
        &&
        container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $('#Username').removeClass('c-blue');
    }
});