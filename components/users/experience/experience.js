'use strict';

$(document).ready(function() { 
    var level = $('.exp-progress').attr('level');
    var perLevel = $('.exp-progress').attr('per-level');
    var total = parseInt(level) * parseInt(perLevel);
    
    $('.exp-progress').progress({
        total: total,
        label: 'ratio',       
        text : {
            ratio: ''           
        }
    });
});