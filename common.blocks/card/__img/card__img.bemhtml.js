block('card').elem('img')({
    tag: 'img',
    attrs: (node, ctx) => {
        const {
            src,
            srcx2,
            alt,
            title
        } = ctx;

        return {
            src,
            alt,
            title,
            srcset: `${srcx2} 2x, ${src} 1x`
        }
    }
})
