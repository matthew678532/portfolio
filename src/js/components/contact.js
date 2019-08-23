define('components/contact', ['jquery', 'helper/util'], function($, util) {
    var $emailField = $('.email-field')
    var $emailButton = $('.email')
    var $emailLogo = $('.email-logo')

    function toggleEmailField() {
        $emailField.hasClass('active')
            ? sendEmail()
            : activateEmailField()
    }

    function sendEmail() {
        var body = $emailField.val()

        if (body.length > 0) {
            window.open('mailto:matthew678532@gmail.com?subject=Webspace&body=' + encodeURIComponent(body))
        }

        deactivateEmailField()
    }

    function activateEmailField() {
        $emailField.addClass('active')
        $emailField.focus()

        $emailLogo.removeClass('fa-envelope-open-text')
        $emailLogo.addClass('fa-paper-plane')
    }

    function deactivateEmailField() {
        $emailField.val('')
        $emailField.removeClass('active')

        $emailLogo.addClass('fa-envelope-open-text')
        $emailLogo.removeClass('fa-paper-plane')
    }

    // Main

    if (util.getViewportDimensions() > 900) {
        $emailButton.click(toggleEmailField)
        $emailField.focusout(deactivateEmailField)
    } else {
        // Handle mobile presses..
    }
})
