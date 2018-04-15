block('card').mod('size', 's')({
    content: (node, ctx) => {
        const {description} = ctx.data;

        if (ctx.data.image) {
            return [
                {
                    elem: 'high-layer',
                    content: [
                        {
                            elem: 'title',
                            content: ctx.data.title,
                            color: ctx.data.titleColor
                        },
                        {
                            block: 'card',
                            elem: 'controls',
                            elemMods: {
                                type: 'v',
                                space: 'true'
                            }
                        }

                    ]
                },
                {
                    elem: 'img-box',
                    data: ctx.data
                }
            ]
        } else {
            return [
                {
                    elem: 'high-layer',
                    content: [
                        {
                            elem: 'title',
                            content: ctx.data.title,
                            color: ctx.data.titleColor
                        },
                        {
                            block: 'card',
                            elem: 'desc',
                            desc: description
                        },
                    ]
                },
                {
                    elem: 'desc-box',
                    content: [
                        {
                            block: 'card',
                            elem: 'footer',
                            content: [
                                {
                                    block: 'card',
                                    elem: 'author',
                                    name: ctx.data.channelName
                                },
                                {
                                    block: 'card',
                                    elem: 'controls',
                                    elemMods: {type: 'h', width: 'short'}
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
})