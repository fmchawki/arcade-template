'use strict';

arikaim.component.onLoaded(function() {
    arikaim.ui.button('#open_sidebar',function(element) {       
        $('.sidebar').sidebar('setting','transition','overlay').sidebar('show');       
    }); 
});