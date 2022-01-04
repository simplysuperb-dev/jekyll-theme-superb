module.exports = {
    content: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.html',
        './*.md',
    ],
    darkMode: 'media',
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@simplysuperb/ui-kit')
    ],
}