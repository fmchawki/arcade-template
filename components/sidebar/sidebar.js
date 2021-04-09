'use strict';

arikaim.component.onLoaded(function() {   
    arikaim.ui.button('.home-button',function(element) {     
        $('.sidebar').toggle(400,function() {
            console.log(this);
        });
    });
});