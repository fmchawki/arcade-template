'use strict';

arikaim.component.onLoaded(function() {
    arikaim.ui.initImageLoader();
    var type = $('#games_list').attr('type');

    paginator.init('games_list',{
        name: 'arcade>games.type',
        params: { type: type }
    },'games.type'); 
});