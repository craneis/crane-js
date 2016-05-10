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
     * Verifica se existe uma classe no elemento
     *
     * @param {string} className  Nome da classe para a verificação
     * @example pedal(".myEl").hasClass("minhaclass")  caso exista no elemento retorna true
     * @return {Boolean} Retorna true caso a classe axiste no elemento
     */
    hasClass: function (element, className) {
        // verifica se existe um espaço vazio no inicio do texto antes da classe e no final
        var regex = new RegExp( '(\\s|^)'+ className +'(\\s|$)' );

        return (element.className.match(regex) === null) ? false : true;
    },
    
    /**
     * Adiciona uma classe de um ou mais elementos
     *
     * @param {string} className  Nome da classe que sera adicionada ao elemento
     */
    addClass: function(element, value) {
        // Regex terms
        var rclass = /[\t\r\n\f]/g,
            rnotwhite = (/\S+/g);

        var classes,
            cur,
            curClass,
            finalValue,
            proceed = typeof value === "string" && value;

        if (!proceed) {
            return element;
        }

        classes = (value || "").match(rnotwhite) || [];
        cur = element.nodeType === 1 && (element.className ? (" " + element.className + " ").replace(rclass, " ") : " ");

        if (!cur) {
            return element;
        }
        
        var j = 0;
        while ((curClass = classes[j++])) {
            if (cur.indexOf(" " + curClass + " ") < 0) {
                cur += curClass + " ";
            }
        }

        // only assign if different to avoid unneeded rendering.
        finalValue = cur.trim();

        if (element.className !== finalValue) {
            element.className = finalValue;
        }

        return element;
    },
    
    /**
     * Remove uma classe de um ou mais elementos
     *
     * @param {string} className  Nome da classe que sera adicionada ao elemento
     */
    removeClass: function (element, className) {
        var _this = this;
        
        var classes = className.split(",");
        var len = classes.length;
        
        for (var k = 0; k < len; k++) {
            var regex = new RegExp('(\\s|^)' + classes[k] + '(\\s|$)');
            element.className = element.className.replace(regex, " ").replace(/^\s+|\s+$/g, '');
        }
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