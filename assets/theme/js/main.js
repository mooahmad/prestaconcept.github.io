<!-- Sidebar script -->
setTimeout(function () {
    var $sidebar = $('.sidebar');
    $sidebar.affix({
        offset: {
            top: function () {
                var sidebarMargin  = parseInt($sidebar.css('margin-top'), 10);
                var carouselHeight  = $('.carousel').height();

                return (this.top = carouselHeight + sidebarMargin);
            }
            , bottom: function () {
                return (this.bottom = $('footer').outerHeight(true));
            }
        }
    })
}, 100);

<!-- ScrollSpy script -->
$('body').scrollspy({
    target: '.sidebar',
    offset: parseInt($('.sidebar').css('margin-top'), 10)
});

$window.on('load', function () {
    $body.scrollspy('refresh')
});
