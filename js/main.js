$(function () {
    $.deck('.slide');


    var processSlide = function($slide) {
        if ($slide.hasClass('vertical-code')) {
            var $scroller = $slide.parent();
            var scroll = $slide.position().top + $scroller.scrollTop() - 50;
            $scroller.animate({scrollTop: scroll});
        }
    };

    $(document).bind('deck.change', function (event, from, to) {
        processSlide($.deck('getSlide', to));
    });

    processSlide($.deck('getSlide'));
});