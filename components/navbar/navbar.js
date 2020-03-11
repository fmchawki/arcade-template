'use strict';

$(document).ready(function() {
    $('.category-dropdown').dropdown({});

    $('#language_dropdown').dropdown({
        onChange: function(value) {       
            arikaim.setLanguage(value);
        }
    });
});