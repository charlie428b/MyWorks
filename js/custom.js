$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    var navbarHeight = document.getElementsByClassName("navbar")[0].getClientRects()[0].height;
    var boundingClientRect = document.getElementById("large-brand").getBoundingClientRect();
    ScrollPosStyler.init({
        scrollOffsetY: (boundingClientRect.top + boundingClientRect.bottom) / 2 - navbarHeight
    });

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

    $('.navbar-brand').on(animationEnd, function () {
        $(".navbar-brand").removeClass("d-none");
    });
})
