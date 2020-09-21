/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function Comments() {
    var self = this;

    this.init = function() {
        arikaim.ui.button('#add_comment_button',function(element) {
            $('#comment_form_content').show();
            $('.reply-form-content').html('');
            $('#comment_buttons').hide();
        });

        arikaim.ui.button('.load-items-button',function(element) {
            var relationId = $(element).attr('relation-id');
            var relationType = $(element).attr('relation-type');
            var skipItems = $(element).attr('skip-items');
            var perPage = $(element).attr('per-page');    
            var total = $(element).attr('total');     
            var skip = parseInt(skipItems) + parseInt(perPage);
            $(element).attr('skip-items',skip);
            if (parseInt(total) <= skip) {
                $(element).hide();
            }
            
            return self.loadItems(relationId,relationType,skipItems)
        });
    };

    this.initRows = function() {
        arikaim.ui.button('.reply-button',function(element) {
            var uuid = $(element).attr('uuid');
            var relationId = $(element).attr('relation-id');
            var relationType = $(element).attr('relation-type');

            self.loadReplyForm(uuid,relationId,relationType);
        });
    };

    this.loadItems = function(relationId, relationType, skip) {
        arikaim.page.loadContent({
            id: 'comments_list',
            append: true,
            component: 'comments>comments.items',
            params: { 
                skip_items: skip,
                relation_id: relationId,
                relation_type: relationType   
            }
        },function(result) {
            self.initRows();
        });
    };

    this.loadReplyForm = function(uuid, relationId, relationType) {
        $('.reply-form-content').html('');
        $('#comment_form_content').hide();
        $('#comment_buttons').show();

        arikaim.page.loadContent({
            id: 'comment_reply_' + uuid,
            append: true,
            component: 'comments>comments.reply',
            params: { 
                reply_to: uuid,
                relation_id: relationId,
                relation_type: relationType   
            }
        });
    };

    this.appendComment = function(uuid, replyTo) {
        var elementId = (isEmpty(replyTo) == true) ? 'comments_list' : 'comment_reply_items_' + replyTo;
        
        arikaim.page.loadContent({
            id: elementId,
            append: true,
            component: 'comments>comments.item',
            params: { uuid: uuid }
        },function(result) {
            self.initRows();
        });  
    };
    
    this.delete = function(uuid, onSuccess, onError) {
        return arikaim.delete('/api/comments/delete/' + uuid,onSuccess,onError);          
    };

    this.post = function(formId, onSuccess, onError) {
        return arikaim.post('/api/comments/post',formId,onSuccess,onError);          
    };

    this.update = function(formId, onSuccess, onError) {
        return arikaim.put('/api/comments/update',formId,onSuccess,onError);          
    };    
}

var comments = new Comments();

$(document).ready(function() {
    comments.init();
    comments.initRows();
});