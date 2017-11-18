/*
Bubble systeme
*/

var bubbleCancled = 0;

function bubble_push( width, height, text, dellay, callback, parent) {
    $(parent).append("<div id='bubble' style='height: "+height+"px;width: "+width+"px;' class='bubble'></div>");
    $("#bubble").click(() => {
        bubbleCancled = 1;
        window.setTimeout(() => {
            $("#bubble").fadeOut();
            callback();
        }, 300);
    });
    $('#bubble').attr('data-before', text);
    window.setTimeout(() => {
        if (bubbleCancled == 0)
            callback();
    }, dellay);
}

function bubble_pop() {
    $('#bubble').fadeout();
}

function bubble_merge(text, dellay, cb) {
    $('#bubble').attr('data-before', text);
    window.setTimeout(cb, dellay);
}

function bubble_get() {
    return $('#bubble');
}
