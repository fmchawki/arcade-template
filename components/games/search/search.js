'use strict';

arikaim.component.onLoaded(function() { 
   
    arikaim.ui.button('.search-button',function(element) {
        var fieldId = $(element).attr('field-id');
        searchGame(fieldId);
    });
   
    $('.search-field').keypress(function(event) {
        if (event.keyCode == 13) {
            var fieldId = $(this).attr('field-id');
            searchGame(fieldId);
        }
    });

    function searchGame(fieldId) {
        var query = $('#' + fieldId).val();  
        $('.search-input').addClass('red fast elastic loading'); 
       
        return arikaim.page.loadContent({
            id: 'page_content',
            params: { query: query },
            method: 'POST',
            component: 'arcade:games.search.result'
        },function(result) {
            $('.search-input').removeClass('red fast elastic loading'); 
        });     
    }
});