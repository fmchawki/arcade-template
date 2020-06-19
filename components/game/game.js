'use strict';

$(document).ready(function() { 
    arikaim.ui.button('.add-favorite-game',function(element) {
        var gameId = $(element).attr('item-value');
        arcadeApi.addItem(gameId,'game',function(result) {
            $(element).hide();
            arikaim.page.toastMessage({
                class: 'success',
                message: result.message
            });
        });
    });
});