define('components/navigation', ['jquery', 'helper/util'], function($, util) {
    var $frame = $('html, body')
    var $window = $(window)

    function smoothScrollToAnchor() {
        var $target = $(this.hash)

        if($target.length) {
            $frame.animate({
                scrollTop: $target.offset().top
            }, 600, 'linear')
            return false
        }
    }

    function fadeInComponents() {
        var aboutOffset = $('#about').offset().top
        var projectsOffset = $('#projects').offset().top
        var blogOffset = $('#blog').offset().top
        var contactOffset = $('#contact').offset().top

        var scrollPositionFromTop = $(this).scrollTop()

        if (scrollPositionFromTop > aboutOffset && scrollPositionFromTop < projectsOffset) {
            console.log('Projects Section')
            $('.projects-grid').addClass('load')
            $('.projects-text').addClass('load')
        } else if (scrollPositionFromTop > projectsOffset && scrollPositionFromTop < blogOffset) {
            console.log('Blog Section')
            $('.blog-text').addClass('load')
            $('.blog-grid').addClass('load')
        } else if (scrollPositionFromTop > blogOffset && scrollPositionFromTop < contactOffset) {
            console.log('Contact Section')
            $('.contact-form').addClass('load')
            $('.contact-text').addClass('load')
        } else {
            console.log('About Section')
        }
    }

    function forceLoadTop() {
        $window.scrollTop(0)
    }

    // $a.on('click', smoothScrollToAnchor)
    $window.on('scroll', fadeInComponents)
    $window.on('beforeunload', forceLoadTop)
})
