block('page')({
    content: [
        {
            block: 'header',
            mix: {
                block: 'page',
                elem: 'header'
            }
        },
        {
            block: 'feed',
            mix: {
                block: 'page',
                elem: 'feed'
            }
        }
    ]
});
