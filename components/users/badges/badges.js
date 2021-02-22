'use strict';

arikaim.component.onLoaded(function() {
    arikaim.ui.button('.set-badge',function(element) {
        var badge = $(element).attr('badge');

        arcadeApi.updateBadge(badge,function(result) {
            arikaim.page.loadContent({
                id: 'badge_content',
                component: 'arcade:users.badge',
                params: { badge: result.badge }
            });  
        });
    });
});