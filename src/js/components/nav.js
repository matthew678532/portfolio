define('components/nav', ['jquery', 'helper/util'], function($, util) {
    var $nav = $('#nav')
    var $navItems = $('.nav-items')
    var $trigger = $('.trigger')
    var $frame = $('html, body')
    var $a = $('a[href*="#"]')

    var timer = null

    function showMenu() {
        $trigger.toggleClass('active')
        $navItems.toggleClass('active')
    }

    function showHideDesktopMenu(e) {
        var xPos = e.pageX

        if (xPos < $nav.width()) {
            clearTimeout(timer)
            timer = null
            $nav.addClass('active')
        } else {
            if (timer === null) {
                $nav.removeClass('active')
            }
        }
    }

    function prepareDesktopNav() {
        if (util.getViewportDimensions() > 900) {
            $nav.addClass('active')

            timer = setTimeout(function() {
                $nav.removeClass('active')
            }, 5000)

            $frame.mousemove(showHideDesktopMenu)
        }
    }

    function smoothScrollToAnchor() {
        var $target = $(this.hash)

        if($target.length) {
            $frame.animate({
                scrollTop: $target.offset().top
            }, 600, 'linear')
            return false
        }
    }

    prepareDesktopNav()
    $trigger.on('click', showMenu)
    $a.on('click', smoothScrollToAnchor)
})
