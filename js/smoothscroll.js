$('a.smoothScroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 54
    }, 500);
    $anchor.parent.addClass('active_nav');
    $anchor.parent.siblings.removeClass('active_nav')
    event.preventDefault();
});

