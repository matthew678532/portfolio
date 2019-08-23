define('helper/util', ['jquery'], function($) {
    return {
        createElement: function(properties) {
            // properties = {type: 'div', id: 'example', class: 'example', content: 'some content'}

            var type = properties.type || 'div'
            var $element = $('<' + type + '></' + type + '>')

            if (properties.class !== undefined) $element.addClass(properties.class)
            if (properties.id !== undefined) $element.attr('id', properties.id)
            if (properties.content !== undefined) $element.text(properties.content)

            return $element
        },

        randomNumber: function(upperLimit) {
            return Math.floor(Math.random() * upperLimit)
        },

        getViewportDimensions: function() {
            $width = $(window).width()
            return $width
        },
    }
})
