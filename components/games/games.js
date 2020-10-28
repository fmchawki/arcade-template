'use strict';

$(document).ready(function() {
    $('.show-popup').popup({
        inline: true
    });
   
    paginator.currentPage = $('#current_page').html();
    paginator.init('games_list','arcade>games','games.home',null); 
    arikaim.ui.initImageLoader();
});