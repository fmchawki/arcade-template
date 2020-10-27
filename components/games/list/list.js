'use strict';

$(document).ready(function() {
    $('.show-popup').popup({
        inline: true
    });   
    arikaim.ui.initImageLoader();
    arikaim.ui.setEmptyImageOnError('img',function(img) {
        $(img).attr('src','');                     
    });
});