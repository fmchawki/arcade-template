$(document).ready(function() {
    arikaim.ui.initImageLoader();
    var category_id = $('#games_list').attr('category');

    paginator.init('games_list',{
        name: 'arcade>games.categorized',
        params: { category_id: category_id }
    },'games.category'); 
});