'use strict';

arikaim.component.onLoaded(function() {
    arikaim.ui.button('.delete-favorite-game',function(element) {
        var uuid = $(element).attr('uuid');
        arcadeApi.deleteFavoriteGame(uuid,function(result) {
            $('#favorite_game_' + uuid).remove();          
        })
    });
});