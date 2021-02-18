'use strict';

arikaim.component.onLoaded(function() {
    arikaim.ui.form.addRules('#comment_form');
     
    arikaim.ui.form.onSubmit("#comment_form",function() {  
        return comments.post('#comment_form');          
    },function(result) {   

        comments.appendComment(result.uuid,result.reply_to);
        arikaim.ui.form.clear('#comment_form');
    },function(error) {    
    });
});