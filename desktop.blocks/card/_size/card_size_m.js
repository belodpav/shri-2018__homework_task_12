modules.define('card', function(provide, Card) {

provide(Card.declMod({ modName: 'size', modVal: 'm' }, {
    onSetMod: {
        js: {
            inited: function() {
                this.domElem[0].style.opacity = '1';
            }
        }
    }
}));

});
