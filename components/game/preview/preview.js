'use strict';

$(document).ready(function() { 
    $('.play-game-image').dimmer({
        on: 'hover'
    });

    arikaim.ui.button('.play-game',function(element) {
        var uuid = $(element).attr('uuid');
        arikaim.page.loadContent({
            id: 'page_content',
            component: 'arcade>game',
            params: { uuid: uuid }
        });
    });
});