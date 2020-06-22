'use strict';

$(document).ready(function() {     
    var perLevel = $('.exp-progress').attr('per-level');
  
    $('.exp-progress').progress({
        total: perLevel,
        label: 'ratio',       
        text : {
            ratio: ''           
        }
    });
});