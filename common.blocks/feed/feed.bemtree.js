block('feed').content()(function() {
    const feeds = this.data.feeds;

    return feeds.map((item) => {
        return {
            block: 'card',
            mix: {block: 'feed', elem: 'item'},
            mods: {
                size: item.size
            },
            data: item
        }
    });
});
