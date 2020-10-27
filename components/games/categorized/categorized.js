'use strict';

$(document).ready(function() {
    arikaim.ui.initImageLoader();

    arikaim.ui.setEmptyImageOnError('img',function(img) {
        $(img).attr('src','');                     
    });
    var categoryId = $('#games_list').attr('category');

    paginator.init('games_list',{
        name: 'arcade>games.categorized',
        params: { category_id: categoryId }
    },'games.category'); 
});