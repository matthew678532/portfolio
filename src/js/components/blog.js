define('components/blog', ['jquery', 'helper/util'], function($, util) {
    var $chevrons = $('.chevron')
    var $leftChevron = $chevrons[0]
    var $rightChevron = $chevrons[1]

    var $gridCarousel = $('.blog-grid-items')
    var $gridItems = $('.blog-grid-item')

    var position = 0

    function handleLeftClick() {
        if (position > 0) {
            position--
            move()
            updateLink()
        }
    }

    function handleRightClick() {
        if (position < $gridItems.length - 1) {
            position++
            move()
            updateLink()
        }
    }

    function getTranslationStep() {
        var $gridItem = $($gridItems[0])
        var margin = $gridItem.css('margin-right')
        var width = $gridItem.css('width')
        var translation = parseInt(margin, 10) + parseInt(width, 10)

        return translation
    }

    function move() {
        var translationStep = getTranslationStep()
        var translation = translationStep * position

        console.log("Translation = ", translation)

        $gridCarousel.css('transform', 'translateX(' + -Math.abs(translation) + 'px)')
    }

    function updateLink() {
        var $activeGridItem = $($gridItems[position])
        var link = $activeGridItem.find('span').text()
        var $link = $('.link')

        $link.attr('href', link)
    }

    updateLink()
    $($leftChevron).click(handleLeftClick)
    $($rightChevron).click(handleRightClick)
})
