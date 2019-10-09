define('components/nav', ['jquery', 'helper/util'], function($, util) {
    var $nav = $('#nav')
    var $navItems = $('.nav-items')
    var $trigger = $('.trigger')
    var $frame = $('html, body')
    var $a = $('a[href*="#"]')
    var $window = $(window)

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

    // About - 550px
    // Projects - 500px
    // Blog - 600px
    // Contact - 350px

    function setActiveNavItem() {
        var about = getSection('#about')
        var projects = getSection('#projects')
        var blog = getSection('#blog')
        var contact = getSection('#contact')

        var scrollPositionFromTop = $(this).scrollTop()

        $a.removeClass('active')

        if (scrollPositionFromTop > about.sectionY && scrollPositionFromTop < projects.sectionY) {
            console.log('Projects Section')
            projects.navItem.addClass('active')
        } else if (scrollPositionFromTop > projects.sectionY && scrollPositionFromTop < blog.sectionY) {
            console.log('Blog Section')
            blog.navItem.addClass('active')
        } else if (scrollPositionFromTop > blog.sectionY && scrollPositionFromTop < contact.sectionY) {
            console.log('Contact Section')
            contact.navItem.addClass('active')
        } else {
            console.log('About Section')
            about.navItem.addClass('active')
        }
    }

    function getSection(id) {
        return {sectionY: $(id).offset().top, navItem: $('a[href=" + id + "]')}
    }

    prepareDesktopNav()
    $trigger.on('click', showMenu)
    $a.on('click', smoothScrollToAnchor)
    $window.on('scroll', setActiveNavItem)
})
