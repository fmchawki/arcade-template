'use strict';

$(document).ready(function() {
    paginator.currentPage = $('#current_page').html();
    paginator.init('games_list','arcade>games','games.home',null); 
    arikaim.ui.initImageLoader();
});