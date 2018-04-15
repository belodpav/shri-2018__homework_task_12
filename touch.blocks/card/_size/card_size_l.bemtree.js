block('card').mod('size', 'l')({
    content: (node, ctx) => {
        const {description} = ctx.data;

        return [
            {
                elem: 'title',
                content: ctx.data.title,
                color: ctx.data.titleColor
            },
            {
                elem: 'img-box',
                data: ctx.data
            },
            {
                elem: 'desc-box',
                elemMods: {type: 'h'},
                content: [
                    {
                        block: 'card',
                        elem: 'desc',
                        desc: description
                    },
                    {
                        block: 'card',
                        elem: 'controls',
                        elemMods: { type: 'v' }
                    }
                ]
            }

        ]
    }
})