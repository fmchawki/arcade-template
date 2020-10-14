'use strict';

$(document).ready(function() {
    $('.category-dropdown').dropdown({});

    $('#language_dropdown').dropdown({
        onChange: function(value) {       
            arikaim.setLanguage(value);
        }
    });

    arikaim.ui.button('#open_sidebar',function(element) {       
        $('.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('show');       
    }); 
});