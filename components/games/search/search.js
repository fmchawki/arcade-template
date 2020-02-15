'use strict';

$(document).ready(function() {   
    arikaim.ui.button('.search-button',function(element) {
        searchGame();
    });
   
    $('#search_field').keypress(function(event) {
        if (event.keyCode == 13) {
            searchGame();
        }
    });

    function searchGame() {
        var query = $('#search_field').val();  
        $('#search_input').addClass('red fast elastic loading'); 
       
        return arikaim.page.loadContent({
            id: 'page_content',
            params: { query: query },
            component: 'arcade>games.search.result'
        },function(result) {
            $('#search_input').removeClass('red fast elastic loading'); 
        });     
    }
});