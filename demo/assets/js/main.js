document.addEventListener("DOMContentLoaded", function(event) {
    Crane.init();
    
    var tpl = Crane.tmpl('template', { 
        name: 'Roger Luiz',
        place: '<strong>Crane</strong>',
        skills: ["js", "html", "css"]
    });
    
    var d = document.getElementById('wrapper');
    d.innerHTML += tpl;
});