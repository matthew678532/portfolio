requirejs.config({
    baseUrl: '/js',
    paths: {
        // Lib
        jquery: 'lib/jquery'
    }
})

requirejs([
    'jquery',
    'helper/util',
    'components/navigation',
    'components/blog'
])
