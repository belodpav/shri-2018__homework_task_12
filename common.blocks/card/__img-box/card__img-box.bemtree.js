block('card').elem('img-box')({
    content: (node, ctx) => {

        return [
            {
                block: 'card',
                elem: 'img',
                src: ctx.data.image,
                srcx2: ctx.data.imagex2,
                alt: ctx.data.channelName,
                title: ctx.data.channelName
            },
            {
                block: 'card',
                elem: 'img-box-title',
                content: ctx.data.channelName
            }
        ]
    }
})
