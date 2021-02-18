'use strict';

arikaim.component.onLoaded(function() {
    $('#language_dropdown').dropdown({
        onChange: function(value) {       
            arikaim.setLanguage(value);
        }
    });
    arikaim.ui.button('#open_sidebar',function(element) {       
        $('.sidebar').sidebar('setting','transition','overlay').sidebar('show');       
    }); 

    arikaim.page.loadContent({
        id: 'user_menu',       
        replace: true,
        component: 'arcade>users.menu.login'       
    });  
});