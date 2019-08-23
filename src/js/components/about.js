define('components/about', ['jquery', 'helper/util'], function($, util) {
    var $aboutSection = $('#about')
    var skills = [
        'html5',
        'sass',
        'js',
        'nodejs',
        'brightscript',
        'gulp'
    ]
    var activeSkill = ''

    function createSkill() {
        removeSkill()

        activeSkill = skills[util.randomNumber(skills.length)]
        cssClass = 'skill skill-' + util.randomNumber(4) // 4 different animation motions..
        $container = util.createElement({type: 'div', class: cssClass})
        $content = util.createElement({type: 'p', content: activeSkill})

        $container.append($content)
        $aboutSection.append($container)
    }

    function removeSkill() {
        $aboutSection.find('.skill').remove()
    }

    setInterval(function() {
        createSkill()
    }, 3000)
})
