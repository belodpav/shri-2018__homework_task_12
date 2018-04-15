modules.define('card', function(provide, Card) {

provide(Card.declMod({ modName: 'size', modVal: 'l' }, {
    onSetMod: {
        js: {
            inited: function() {
                const title = this.findChildElem({elem: 'title'}).domElem[0];
                const desc = this.findChildElem({elem: 'desc'}).domElem[0];
                const footer = this.findChildElem({elem: 'footer'}).domElem[0];
                const words = desc.innerText.split(' ');
                const tt = this.domElem[0].offsetHeight - title.offsetHeight - footer.offsetHeight;
                desc.innerText = '';
                let i;
                for (i = 0; i < words.length; i++) {
                    desc.innerText += ' ' + words[i];

                    if (tt <= desc.offsetHeight) {

                        if (i < words.length) {
                            desc.innerText += '...';
                        }
                        this.domElem[0].style.opacity = '1';
                        return;
                    }
                }
                this.domElem[0].style.opacity = '1';

            }
        }
    }
}));

});
