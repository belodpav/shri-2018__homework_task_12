block('card').elem('title')({
    tag: 'div',
    attrs: (node, ctx) => {
        return {
            style: `color: ${ctx.color}`
        }
    }
});
