/**
 * Roger Luiz
 * 
 * Crane Utils
 */
var Crane = Crane || {};

Crane = {
    init: function() {
        // create all custom HTML elements
        this.createElements();
    },
    
    /**
     * create all custom HTML elements
     */
    createElements: function() {
        // cria um elemento x-modal
        document.registerElement('c-modal', {
            prototype: Object.create(HTMLElement.prototype)
        });
    },
    
    log: function(msg, color) {
        color = color || "black";
        bgc = "White";
        
        switch (color) {
            case "success":  color = "Green";      bgc = "LimeGreen";       break;
            case "info":     color = "DodgerBlue"; bgc = "Turquoise";       break;
            case "error":    color = "Red";        bgc = "Black";           break;
            case "start":    color = "OliveDrab";  bgc = "PaleGreen";       break;
            case "warning":  color = "Tomato";     bgc = "Black";           break;
            case "end":      color = "Orchid";     bgc = "MediumVioletRed"; break;
            default: color = color;
        }

        if (typeof msg == "object") {
            console.log(msg);
        } else if (typeof color == "object") {
            console.log("%c" + msg, "color: PowderBlue;font-weight:bold; background-color: RoyalBlue;");
            console.log(color);
        } else {
            console.log("%c" + msg, "color:" + color + ";font-weight:bold; background-color: " + bgc + ";");
        }
    }
};