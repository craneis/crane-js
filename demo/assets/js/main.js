document.addEventListener("DOMContentLoaded", function(event) {
    Crane.init();
    
    // temlate js
    var tpl = Crane.tmpl('#template', { 
        name: 'Roger Luiz',
        place: '<strong>Crane</strong>',
        skills: ["js", "html", "css"]
    });
    document.querySelector(".container").innerHTML += tpl;
    
    
    // modal js
    document.querySelector(".open-modal").addEventListener('click', function(event) {
        event.preventDefault();
        
        Crane.modal.open('#modal-crane');
    }, false);
});
