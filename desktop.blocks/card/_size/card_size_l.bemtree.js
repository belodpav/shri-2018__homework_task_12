block('card').mod('size', 'l')({
    content: (node, ctx) => {
        const {description} = ctx.data;

        return [
            {
                elem: 'img-box',
                data: ctx.data
            },
            {
                elem: 'desc-box',
                elemMods: {type: 'v'},
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
                    {
                        block: 'card',
                        elem: 'footer',
                        content: [
                            {
                                block: 'card',
                                elem: 'controls',
                                elemMods: { type: 'h', width: 'full' }
                            }
                        ]
                    }
                ]
            }

        ]
    }
})
