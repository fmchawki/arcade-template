'use strict';

$(document).ready(function() {

    arikaim.ui.form.addRules("#login_form",{
        inline: false,
        fields: {
            password: {
                rules: [{ type: "minLength[4]" }]
            },
            user_name: {
                rules: [{ type: "empty" }]
            }
        }
    });   
    
    arikaim.ui.button('#forgotten_button',function(element) {
        return arikaim.page.loadContent({
            id : 'login_panel',
            component: 'arcade>users.reset-password'
        });
    });
   
    arikaim.ui.form.onSubmit('#login_form',function() {      
        return users.login();
    },function(result) {   
        arikaim.ui.hide('.message');

        if (isEmpty(result.redirect_url) == false) {
            arikaim.loadUrl(result.redirect_url);
        } else {
            callFunction(users.onLogin,result); 
        }           
    },function(errors) {
        if (users.getLoginAttempts() > 0) {          
            arikaim.page.loadContent({
                id : 'captcha_panel',
                component: 'captcha::code',
                replace: true
            });
        }
    });
});