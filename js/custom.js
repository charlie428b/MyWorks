$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    var animationEnd = (function (el) {
        var animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'mozAnimationEnd',
            WebkitAnimation: 'webkitAnimationEnd',
        };

        for (var t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    })(document.getElementsByClassName('navbar-brand')[0]);

    var handleAboveCallback = function (element) {
        $(element).one(animationEnd, function () {
            element.classList.add("d-none");
        });
    };

    var handleBelowCallback = function (element) {
        $(element).off(animationEnd);
        element.classList.remove("d-none");
    };

    var navbarHeight = document.getElementsByClassName("navbar")[0].getClientRects()[0].height;
    var boundingClientRect = document.getElementById("large-brand").getBoundingClientRect();

    ScrollPosStyler.init({
        scrollOffsetY: (boundingClientRect.top + boundingClientRect.bottom) / 2 - navbarHeight,
        onAboveCallback: handleAboveCallback,
        onBelowCallback: handleBelowCallback
    });
})
