'use strict';

arikaim.component.onLoaded(function() {
    $('#games_dropdown').dropdown({
        apiSettings: {     
            on: 'now',      
            url: arikaim.getBaseUrl() + '/api/arcade/games/list/dropdown/{query}',   
            cache: false        
        },
        filterRemoteData: false         
    });
});