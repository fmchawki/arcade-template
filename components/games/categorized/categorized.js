'use strict';

arikaim.component.onLoaded(function() {
    arikaim.ui.initImageLoader();
    var categoryId = $('#games_list').attr('category');

    paginator.init('games_list',{
        name: 'arcade:games.categorized',
        params: { category_id: categoryId }
    },'games.category'); 
});