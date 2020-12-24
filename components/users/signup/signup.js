'use strict';

$(document).ready(function() { 
    arikaim.ui.form.addRules("#signup_form",{
        inline: false,
        fields: {
            user_name: {
                rules: [{ type:'minLength[2]' }]
            },
            email: {
                rules: [{ type: 'email' }]
            },
            password: {
                rules: [{ type: "minLength[4]" }]
            },
            repeat_password: {
                rules: [
                    { type: "minLength[4]" },
                    { type: "match[password]" }
                ]
            }
        }
    });   
    
    arikaim.ui.form.onSubmit('#signup_form',function() {
        return users.signup('#signup_form');
    },function(result) {     
        if (isEmpty(result.redirect_url) == false) {
            arikaim.loadUrl(result.redirect_url);
        } else {
            arikaim.page.loadContent({
                id: 'signup_content',
                component: 'arcade>users.signup.message',
                params: { uuid: result.uuid }
            }); 
        }                 
    });
});