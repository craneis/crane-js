Crane.modal = {
    open: function(id) {
        var modal = document.querySelector(id);
        
        if (!Crane.hasClass(modal, 'cmodal-opened')) {
            Crane.addClass(modal, 'cmodal-opened');
        }
        
        modal.querySelector('a[data-button="close"]').addEventListener('click', function(event) {
            event.preventDefault();
            
            Crane.modal.close(id);
        }, false);
    },
    
    close: function(id) {
        var modal = document.querySelector(id);
        
        if (Crane.hasClass(modal, 'cmodal-opened')) {
            Crane.removeClass(modal, 'cmodal-opened');
        }
    }
};