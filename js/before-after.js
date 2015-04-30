$(document).ready(function () {
    $("#drag").draggable({
        axis: "x",
        scroll: false,
        containment: "parent",
        drag: function (event, ui) {
            $('#img2').width(ui.position.left);
        }
    });
    $('#drag').css('top', ($('#img1').height() / 2) * -1)
});
$(window).resize(function () {
    $('#drag').css('left', ($('#img1').width() / 2)).css('top', ($('#img1').height() / 2) * -1)
    $('#img2').width($('#img1').width() / 2 + $('#drag').width() / 2);
});
