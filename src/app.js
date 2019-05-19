requirejs.config({
    baseUrl: 'js',
    paths: {
        // Lib
        jquery: 'lib/jquery'
    }
})

requirejs(['entry'])
