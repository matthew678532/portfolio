define('components/projects', ['jquery', 'helper/util'], function($, util) {
    $playIcon = $('.play-icon')
    $projectsContainer = $('.projects-container')

    function onPlayIconClick() {
        $playIcon.addClass('clicked')
        $projectsContainer.addClass('clicked')
    }

    $playIcon.click(onPlayIconClick)
})
