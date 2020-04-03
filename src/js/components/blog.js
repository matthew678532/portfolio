define('components/blog', ['jquery', 'helper/util'], function($, util) {
    var $chevrons = $('.chevron')
    var $leftChevron = $chevrons[0]
    var $rightChevron = $chevrons[1]

    var $gridCarousel = $('.blog-grid-carousel')
    var $gridItems = $('.blog-grid-item')

    var position = 0

    function handleLeftClick() {
        if (position < $gridItems.length - 1) {
            position++
            move()
            updateLink()
        }
    }

    function handleRightClick() {
        if (position > 0) {
            position--
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

        $gridCarousel.css('transform', 'translateX(' + translation + 'px)')
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

    // Main
    // if (util.getViewportDimensions() > 900) {
    //     $leftChevron.click(handleLeftClick)
    //     $rightChevron.click(handleRightClick)
    // }
})
