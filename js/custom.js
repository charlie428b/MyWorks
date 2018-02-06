$(function () {
    $('[data-toggle="tooltip"]').tooltip();


    var navbarHeight = document.getElementsByClassName("navbar")[0].getClientRects()[0].height;
    var boundingClientRect = document.getElementById("large-brand").getBoundingClientRect();
    ScrollPosStyler.init({
        scrollOffsetY: (boundingClientRect.top + boundingClientRect.bottom) / 2 - navbarHeight
    });
})
