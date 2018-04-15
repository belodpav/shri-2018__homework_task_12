block('card').mod('size', 'm')({
    content: (node, ctx) => {
        const {description} = ctx.data;

        return [
            {
                elem: 'high-layer',
                content: [
                    {
                        elem: 'title',
                        content: ctx.data.title,
                        color: ctx.data.titleColor
                    },
                ]
            },
            {
                elem: 'img-box',
                data: ctx.data
            },
            {
                elem: 'desc-box',
                elemMods: {type: 'h', space: 'top'},
                content: [
                    {
                        block: 'card',
                        elem: 'desc',
                        elemMods: {cut: 'height'},
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