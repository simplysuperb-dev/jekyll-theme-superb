module.exports = {
    content: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './_posts/*.markdown',
        './*.html',
        './*.md',
    ],
    darkMode: 'media',
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [
        require('@simplysuperb-dev/ui-kit')
    ],
}
