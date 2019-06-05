define('components/nav', ['jquery'], function($) {
    var $nav = $('.nav')
    var $navItems = $('.nav-items')
    var $trigger = $('.trigger')
    var $body = $('body')

    var timer = null

    $trigger.on('click', showMenu)

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
        var desktopWidth = 1024
        var windowWidth = $(window).width()

        if (windowWidth >= desktopWidth) {
            $nav.addClass('active')

            timer = setTimeout(function() {
                $nav.removeClass('active')
            }, 5000)

            $body.mousemove(showHideDesktopMenu)
        }
    }

    prepareDesktopNav()
})
