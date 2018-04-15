modules.define('card', function(provide, Card) {

provide(Card.declMod({ modName: 'converted-text', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                const card = this.domElem[0];

                if (!this.findChildElem({elem: 'desc'})) {
                    card.style.opacity = '1';
                    return;
                }

                function getElem(elem, context) {
                    return context
                    .findChildElem({ elem: elem })
                    .domElem[0];
                }


                const elem = {
                    title: getElem('title', this),
                    desc: getElem('desc', this),
                    footer: getElem('footer', this),
                };

                const height = {
                    card: card.offsetHeight,
                    title: elem.title.offsetHeight,
                    footer: elem.footer.offsetHeight
                };

                const words = elem.desc.innerText.split(' ');
                // Available space by height
                let freeHeight = height['card'];

                freeHeight -= height['title'] + height['footer'];
                elem.desc.innerText = '';

                for (let i = 0; i < words.length; i++) {
                    elem.desc.innerText += ' ' + words[i];
                    const descH = elem.desc.offsetHeight;

                    if (freeHeight < 15 + descH) {

                        if (i < words.length) {
                            elem.desc.innerText += '...';
                        }
                        card.style.opacity = '1';
                        return;
                    }
                }

                card.style.opacity = '1';
            }
        }
    }
}));

});
