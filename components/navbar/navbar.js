'use strict';

$(document).ready(function() {
    $('#language_dropdown').dropdown({
        onChange: function(value) {       
            arikaim.setLanguage(value);
        }
    });
    arikaim.ui.button('#open_sidebar',function(element) {       
        $('.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('show');       
    }); 
});